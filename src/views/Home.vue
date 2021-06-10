<template>
	<div :class="{
		'is-page-ready': isPageReady,
		'hiding': isHiding
	}">
		<div
			ref="homeSwiper"
			v-swiper:homeSwiper="swiperOptions"
			:style="cssWindowSize"
			class="full-page"
			@slide-change="handleHomeSwiperSlideChange"
			@slider-move="handleHomeSwiperSlideMove"
		>
			<div class="swiper-wrapper main-container-swiper-wrapper will-change-transform">
				<div class="swiper-slide">
					<home-front-page />
				</div>
				<div class="swiper-slide">
					<home-portfolio-page />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { NAVIGATION_HOME, NAVIGATION_PORTFOLIOS } from "../assets/js/constant";
import HomeFrontPage from "../components/HomeFrontPage.vue";
import HomePortfolioPage from "../components/HomePortfolioPage.vue";

const pageList = [
	NAVIGATION_HOME.name,
	NAVIGATION_PORTFOLIOS.name
];

export default {
	name: "HomePage",
	title: "Panupat K.",
	components: {
		HomeFrontPage,
		HomePortfolioPage
	},
	data() {
		return {
			isPageReady: false,
			isHiding: false,
			swiperOptions: {
				direction: "vertical",
				speed: 1000,
				allowSlidePrev: false,
				allowTouchMove: true,
				breakpoints: {
					1024: {
						allowTouchMove: false
					}
				}
				// NOTE: option mousewheel = true and keyboard = true not working
			},
			isHomeSwiperTouchMove: false
		};
	},
	computed: {
		...mapState({
			headerData: (state) => state.header
		})
	},
	created() {
		// Change init slide index
		if (this.$route.name === NAVIGATION_PORTFOLIOS.name) {
			this.swiperOptions = {
				...this.swiperOptions,
				initialSlide: 1
			};
		}
	},
	mounted() {
		setTimeout(() => {
			this.isPageReady = true;
		}, 100);

		this.$refs.homeSwiper.addEventListener("wheel", this.handleOnWheel, true);
		document.onkeydown = this.handleOnKeypress;
	},
	destroyed() {
		document.onkeydown = null;
	},
	methods: {
		handleHomeSwiperSlideChange() {
			switch (this.homeSwiper.activeIndex) {
				case 0: {
					this.homeSwiper.allowSlidePrev = false;
					this.homeSwiper.allowSlideNext = true;
					break;
				}

				case 1: {
					this.homeSwiper.allowSlidePrev = false;
					this.homeSwiper.allowSlideNext = false;

					// In-case change slide with touch move/drag
					if (this.isHomeSwiperTouchMove) {
						this.isHomeSwiperTouchMove = false;
						this.$router.push({
							name: NAVIGATION_PORTFOLIOS.name
						});
					}
					break;
				}

				default: {
					break;
				}
			}
		},
		handleOnWheel(event) {
			// NOTE: event.deltaY === 100 is wheel down
			if (this.$route.name === NAVIGATION_HOME.name && event.deltaY === 100) {
				this.$router.push({
					name: NAVIGATION_PORTFOLIOS.name
				});
			}
		},
		handleOnKeypress(event) {
			if (this.$route.name === NAVIGATION_HOME.name && event?.keyCode === 40) {
				this.$router.push({
					name: NAVIGATION_PORTFOLIOS.name
				});
			}
		},
		handleHomeSwiperSlideMove() {
			if (!this.isHomeSwiperTouchMove) {
				this.isHomeSwiperTouchMove = true;
			}
		}
	},
	beforeRouteLeave(to, from, next) {
		// Control slide page
		if (to.name === NAVIGATION_PORTFOLIOS.name && from.name === NAVIGATION_HOME.name) {
			this.homeSwiper.slideTo(1);
		} else if (to.name === NAVIGATION_HOME.name && from.name === NAVIGATION_PORTFOLIOS.name) {
			this.homeSwiper.allowSlidePrev = true;
			this.homeSwiper.allowSlideNext = true;
			this.homeSwiper.slideTo(0);
		}

		// Fadeout
		if (!pageList.includes(to.name)) {
			this.isHiding = true;

			setTimeout(() => {
				next();
			}, 500);
		} else {
			next();
		}
	}
};
</script>

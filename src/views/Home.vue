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
		>
			<div class="swiper-wrapper main-container-swiper-wrapper">
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
import HomeFrontPage from "../components/HomeFrontPage.vue";
import HomePortfolioPage from "../components/HomePortfolioPage.vue";

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
				allowTouchMove: false
				// NOTE: option mousewheel = true and keyboard = true not working
			}
		};
	},
	computed: {
		...mapState({
			headerData: (state) => state.header
		})
	},
	created() {
		// Change init slide index
		if (this.$route.name === "portfolios") {
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
					break;
				}

				default: {
					break;
				}
			}
		},
		handleOnWheel(event) {
			// NOTE: event.deltaY === 100 is wheel down
			if (this.$route.name === "home" && event.deltaY === 100) {
				this.$router.push({
					name: "portfolios"
				});
			}
		},
		handleOnKeypress(event) {
			if (this.$route.name === "home" && event?.keyCode === 40) {
				this.$router.push({
					name: "portfolios"
				});
			}
		}
	},
	beforeRouteLeave(to, from, next) {
		// Control slide page
		if (to.name === "portfolios" && from.name === "home") {
			this.homeSwiper.slideTo(1);
		} else if (to.name === "home" && from.name === "portfolios") {
			this.homeSwiper.allowSlidePrev = true;
			this.homeSwiper.allowSlideNext = true;
			this.homeSwiper.slideTo(0);
		}

		// Fadeout
		if (!["home", "portfolios"].includes(to.name)) {
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

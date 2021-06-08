<template>
	<div :class="{
		'is-page-ready': isPageReady,
		'hiding': isHiding
	}">
		<div
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
				mousewheel: true,
				keyboard: true,
				allowSlidePrev: false,
				allowTouchMove: false
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
					// this.setCurrentPage(pageList.PORTFOLIOS.key); // In-case change slide with drag
					break;
				}

				default: {
					break;
				}
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

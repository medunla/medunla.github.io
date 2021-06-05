<template>
	<div
		v-swiper:homeSwiper="swiperOptions"
		:style="cssWindowSize"
		@slide-change="handleHomeSwiperSlideChange"
		class="full-page"
	>
		<div class="swiper-wrapper main-container-swiper-wrapper">
			<div class="swiper-slide">
				<home-front-page
					@onClickIconMouse="handleChangeToPortfoliosPage"
				/>
			</div>
			<div class="swiper-slide">
				<home-portfolio-page />
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { pageList } from "../assets/js/constant";
import HomeFrontPage from "../components/HomeFrontPage.vue";
import HomePortfolioPage from "../components/HomePortfolioPage.vue";

const mappingPageToSlideIndex = {
	[pageList.HOME.key]: 0,
	[pageList.PORTFOLIOS.key]: 1
};
const homeIndex = mappingPageToSlideIndex[pageList.HOME.key];
const portfolioIndex = mappingPageToSlideIndex[pageList.PORTFOLIOS.key];

export default {
	name: "Home",
	title: "Panupat K.",
	components: {
		HomeFrontPage,
		HomePortfolioPage
	},
	data() {
		return {
			swiperOptions: {
				direction: "vertical",
				speed: 1000,
				mousewheel: true,
				keyboard: true,
				allowSlidePrev: false
			}
		};
	},
	computed: {
		...mapState({
			headerData: (state) => state.header
		})
	},
	watch: {
		"headerData.currentPage.key": {
			deep: true,
			handler(currentPageKey) {
				this.handleChangeSlideByPageKey(currentPageKey);
			}
		}
	},
	methods: {
		...mapActions({
			changePage: "changePage"
		}),
		handleHomeSwiperSlideChange() {
			switch (this.homeSwiper.activeIndex) {
				case homeIndex: {
					this.homeSwiper.allowSlidePrev = false;
					this.homeSwiper.allowSlideNext = true;
					break;
				}

				case portfolioIndex: {
					this.homeSwiper.allowSlidePrev = false;
					this.homeSwiper.allowSlideNext = false;
					this.changePage(pageList.PORTFOLIOS.key); // In-case change slide with drag
					break;
				}

				default: {
					break;
				}
			}
		},
		handleChangeSlideByPageKey(key) {
			const index = mappingPageToSlideIndex[key] || mappingPageToSlideIndex[pageList.HOME.key];

			if (this.homeSwiper.activeIndex !== index) {
				// Allow slide before change
				this.homeSwiper.allowSlidePrev = true;
				this.homeSwiper.allowSlideNext = true;

				this.homeSwiper.slideTo(index);
			}
		},
		handleChangeToPortfoliosPage() {
			this.changePage(pageList.PORTFOLIOS.key);
		}
	}
};
</script>

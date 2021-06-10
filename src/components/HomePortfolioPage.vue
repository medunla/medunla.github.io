<template>
	<div
		:style="cssWindowSize"
		class="portfolio-list-page full-page"
	>
		<div
			v-swiper:portfolioSwiper="swiperOptions"
			class="portfolio-list"
			@slide-change="handlePortfolioSwiperSlideChange"
		>
			<div class="swiper-wrapper">
				<div
					v-for="portfolio in portfolioData"
					:key="portfolio.slug"
					class="swiper-slide portfolio-list-item"
				>
					<h2 class="portfolio-list-item-name">
						<router-link :to="{
							name: NAVIGATION_PORTFOLIO_DETAIL.name,
							params: {
								slug: portfolio.slug
							}
						}">
							{{ portfolio.name }}
						</router-link>
					</h2>
				</div>
			</div>
		</div>

		<!-- arrow -->
		<img
			:class="['portfolio-list-arrow-up', {
				disabled: isArrowUpDisabled
			}]"
			src="/img/arrow-up.svg"
			alt="Arrow Up"
			@click="handleSlidePrev"
		>
		<img
			:class="['portfolio-list-arrow-down', {
				disabled: isArrowDownDisabled
			}]"
			src="/img/arrow-down.svg"
			alt="Arrow Down"
			@click="handleSlideNext"
		>
		<!-- end arrow -->
	</div>
</template>

<script>
import { NAVIGATION_PORTFOLIO_DETAIL } from "../assets/js/constant";
import portfolioData from "../assets/js/portfolioData";

export default {
	name: "HomePortfolioPage",
	data() {
		return {
			NAVIGATION_PORTFOLIO_DETAIL,
			portfolioData,
			swiperOptions: {
				direction: "vertical",
				mousewheel: true,
				keyboard: true,
				slidesPerView: "auto",
				nested: true
			},
			isArrowUpDisabled: true,
			isArrowDownDisabled: false
		};
	},
	methods: {
		handlePortfolioSwiperSlideChange() {
			this.isArrowUpDisabled = this.portfolioSwiper.isBeginning;
			this.isArrowDownDisabled = this.portfolioSwiper.isEnd;
		},
		handleSlidePrev() {
			this.portfolioSwiper.slidePrev();
		},
		handleSlideNext() {
			this.portfolioSwiper.slideNext();
		}
	}
};
</script>

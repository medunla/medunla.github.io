<template>
	<div
		v-swiper:imageSwiper="swiperOptions"
		class="portfolio-slide"
	>
		<div class="swiper-wrapper">
			<portfolio-detail-attachment-slide-item
				v-for="(attachment, index) in attachments"
				:key="index"
				:attachment="attachment"
			/>
		</div>
	</div>
</template>

<script>
import PortfolioDetailAttachmentSlideItem from "./PortfolioDetailAttachmentSlideItem.vue";

export default {
	name: "PortfolioDetailAttachmentSlide",
	props: {
		attachments: {
			type: Array,
			default: () => []
		}
	},
	components: {
		PortfolioDetailAttachmentSlideItem
	},
	data() {
		return {
			swiperOptions: {
				mousewheel: false,
				keyboard: true,
				grabCursor: true,
				slidesPerView: "auto",
				autoHeight: true,
				centeredSlides: true
			}
		};
	}
};
</script>

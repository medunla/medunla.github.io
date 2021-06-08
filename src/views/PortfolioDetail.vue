<template>
	<div
		:class="{
			'is-page-ready': isPageReady,
			'hiding': isHiding
		}"
		class="portfolio-container container"
	>
		<router-link
			:to="{ name: 'portfolios' }"
		>
			<portfolio-detail-close-button />
		</router-link>

		<portfolio-detail-description :portfolio="portfolio" />
		<portfolio-detail-attachment-slide
			v-if="portfolio.images.length"
			:attachments="portfolio.images"
		/>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import portfolioData from "../assets/js/portfolioData";
import PortfolioDetailCloseButton from "../components/PortfolioDetailCloseButton.vue";
import PortfolioDetailDescription from "../components/PortfolioDetailDescription.vue";
import PortfolioDetailAttachmentSlide from "../components/PortfolioDetailAttachmentSlide.vue";

export default {
	name: "PortfolioDetailPage",
	components: {
		PortfolioDetailCloseButton,
		PortfolioDetailDescription,
		PortfolioDetailAttachmentSlide
	},
	data() {
		return {
			isPageReady: false,
			isHiding: false
		};
	},
	computed: {
		portfolio() {
			return portfolioData.find((item) => item.slug === this.$route.params.slug) || {};
		}
	},
	watch: {
		portfolio: {
			immediate: true,
			handler(portfolio) {
				// Set page title
				this.setPageTitle(`${portfolio.name} ― Panupat K.`);

				// Set route meta
				this.setPortfolioDetailData({
					name: portfolio.name
				});
			}
		}
	},
	mounted() {
		setTimeout(() => {
			this.isPageReady = true;
		}, 100);
	},
	methods: {
		...mapActions({
			setPortfolioDetailData: "setPortfolioDetailData"
		})
	},
	beforeRouteLeave(to, from, next) {
		this.isHiding = true;

		setTimeout(() => {
			window.scrollTo(0, 0);
			next();
		}, 500);
	}
};
</script>

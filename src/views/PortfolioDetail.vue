<template>
	<div class="portfolio-container container">
		<router-link
			:to="{ name: 'home' }"
			@click.native="handleClickCloseButton"
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
import { pageList } from "../assets/js/constant";
import PortfolioDetailCloseButton from "../components/PortfolioDetailCloseButton.vue";
import PortfolioDetailDescription from "../components/PortfolioDetailDescription.vue";
import PortfolioDetailAttachmentSlide from "../components/PortfolioDetailAttachmentSlide.vue";

export default {
	name: "PortfolioDetail",
	components: {
		PortfolioDetailCloseButton,
		PortfolioDetailDescription,
		PortfolioDetailAttachmentSlide
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

				// Set current page
				this.setCurrentPage({
					slug: portfolio.slug,
					key: portfolio.slug,
					label: portfolio.name
				});
			}
		}
	},
	methods: {
		...mapActions({
			setCurrentPage: "setCurrentPage"
		}),
		handleClickCloseButton() {
			this.setCurrentPage(pageList.PORTFOLIOS.key);
		}
	}
};
</script>

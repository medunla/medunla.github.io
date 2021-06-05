<template>
	<div class="navigation-page-portfolio">
		<div class="wrapper">
			<button
				:class="{ 'is-active': isPagePortfolios }"
				type="button"
				class="button-navigation-page-portfolio"
				@click="handleChangeToPortfoliosPage"
			>
				{{ text }}
			</button>
		</div>
	</div>
</template>

<script>
import { pageList } from "../assets/js/constant";

export default {
	name: "TheNavigationToPortfolios",
	props: {
		currentPageSlug: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			text: pageList.PORTFOLIOS.label
		}
	},
	computed: {
		isPagePortfolios() {
			return this.currentPageSlug === pageList.PORTFOLIOS.slug;
		}
	},
	methods: {
		handleChangeToPortfoliosPage() {
			this.$emit("onChangePage", pageList.PORTFOLIOS.key);
		}
	}
};
</script>
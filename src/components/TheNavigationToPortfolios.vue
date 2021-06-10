<template>
	<div class="navigation-page-portfolio">
		<div class="navigation-page-portfolio-wrapper">
			<router-link
				:to="{
					name: NAVIGATION_PORTFOLIOS.name
				}"
				:class="{ 'is-active': isPagePortfolios }"
				class="button-navigation-page-portfolio"
				@click.native="handleChangePage"
			>
				Portfolios
			</router-link>
		</div>
	</div>
</template>

<script>
import { NAVIGATION_PORTFOLIOS } from "../assets/js/constant";

export default {
	name: "TheNavigationToPortfolios",
	data() {
		return {
			NAVIGATION_PORTFOLIOS
		};
	},
	computed: {
		isPagePortfolios() {
			return this.$route.name === NAVIGATION_PORTFOLIOS.name;
		}
	},
	methods: {
		handleChangePage() {
			this.$emit("onChangePage");
		}
	}
};
</script>
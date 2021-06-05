<template>
	<div class="navigation-page-portfolio">
		<div class="wrapper">
			<router-link
				:to="{
					name: 'portfolios'
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
export default {
	name: "TheNavigationToPortfolios",
	computed: {
		isPagePortfolios() {
			return this.$route.name === "portfolios";
		}
	},
	methods: {
		handleChangePage() {
			this.$emit("onChangePage");
		}
	}
};
</script>
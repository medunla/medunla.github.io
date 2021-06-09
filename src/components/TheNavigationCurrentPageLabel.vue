<template>
	<div
		v-if="pageLabel"
		class="navigation-page-current is-show"
	>
		<span class="button-navigation-page-current">{{ pageLabel }}</span>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { NAVIGATION_PORTFOLIO_DETAIL } from "../assets/js/constant";

export default {
	name: "TheNavigationCurrentPageLabel",
	computed: {
		...mapState({
			portfolioDetailData: (state) => state.portfolioDetail
		}),
		pageLabel() {
			if (this.$route.name === NAVIGATION_PORTFOLIO_DETAIL.name) {
				return this.portfolioDetailData.name;
			}
			return this.$route.meta.label;
		}
	}
};
</script>
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

export default {
	name: "TheNavigationCurrentPageLabel",
	computed: {
		...mapState({
			portfolioDetailData: (state) => state.portfolioDetail
		}),
		pageLabel() {
			if (this.$route.name === "portfolioDetail") {
				return this.portfolioDetailData.name;
			}
			return this.$route.meta.label;
		}
	}
};
</script>
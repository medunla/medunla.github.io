<template>
	<transition name="fade">
		<div
			v-if="isShow && pageLabel"
			class="navigation-page-current"
		>
			<span class="button-navigation-page-current">{{ pageLabel }}</span>
		</div>
	</transition>
</template>

<script>
import { mapState } from "vuex";
import { NAVIGATION_PORTFOLIO_DETAIL, NAVIGATION_ABOUT, NAVIGATION_CONTACT } from "../assets/js/constant";

const enableRoutesName = [
	NAVIGATION_PORTFOLIO_DETAIL.name,
	NAVIGATION_ABOUT.name,
	NAVIGATION_CONTACT.name
]

export default {
	name: "TheNavigationCurrentPageLabel",
	computed: {
		...mapState({
			portfolioDetailData: (state) => state.portfolioDetail
		}),
		isShow() {
			return enableRoutesName.includes(this.$route.name);
		},
		pageLabel() {
			if (this.$route.name === NAVIGATION_PORTFOLIO_DETAIL.name) {
				return this.portfolioDetailData.name;
			}
			return this.$route.meta.label;
		}
	}
};
</script>
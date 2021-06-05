<template>
	<div class="header">
		<the-navigation
			v-if="headerData.isOpenedNavgation"
			@onChangePage="closeNavigation"
		/>
		<the-hamburger
			:isActive="headerData.isOpenedNavgation"
			@onOpenNavigation="openNavigation"
			@onCloseNavigation="closeNavigation"
		/>
		<the-navigation-current-page-label />
		<the-navigation-to-portfolios
			@onChangePage="closeNavigation"
		/>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TheNavigation from "./TheNavigation.vue";
import TheHamburger from "./TheHamburger.vue";
import TheNavigationCurrentPageLabel from "./TheNavigationCurrentPageLabel.vue";
import TheNavigationToPortfolios from "./TheNavigationToPortfolios.vue";

export default {
	name: "TheHeader",
	components: {
		TheNavigation,
		TheHamburger,
		TheNavigationCurrentPageLabel,
		TheNavigationToPortfolios
	},
	data() {
		console.log(this.$route);
		return {
			// currentPage
		};
	},
	computed: {
		...mapState({
			headerData: (state) => state.header
		})
	},
	methods: {
		...mapActions({
			openNavigation: "openNavigation",
			closeNavigation: "closeNavigation"
		})
	}
};
</script>
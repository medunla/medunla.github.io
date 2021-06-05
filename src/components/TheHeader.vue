<template>
	<div class="header">
		<the-navigation
			v-if="headerData.isOpenedNavgation"
			:pageList="headerData.pageList"
			:currentPageSlug="headerData.currentPage.slug"
			@onChangePage="handleChangePage"
		/>
		<the-hamburger
			:isActive="headerData.isOpenedNavgation"
			@onOpenNavigation="openNavigation"
			@onCloseNavigation="closeNavigation"
		/>
		<the-navigation-current-page-label
			:text="headerData.currentPage.label"
		/>
		<the-navigation-to-portfolios
			:currentPageSlug="headerData.currentPage.slug"
			@onChangePage="handleChangePage"
		/>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import TheNavigation from "@/components/TheNavigation.vue";
import TheHamburger from "@/components/TheHamburger.vue";
import TheNavigationCurrentPageLabel from "@/components/TheNavigationCurrentPageLabel.vue";
import TheNavigationToPortfolios from "@/components/TheNavigationToPortfolios.vue";

export default {
	name: "TheHeader",
	components: {
		TheNavigation,
		TheHamburger,
		TheNavigationCurrentPageLabel,
		TheNavigationToPortfolios
	},
	computed: {
		...mapState({
			headerData: (state) => state.header
		})
	},
	methods: {
		...mapActions({
			openNavigation: "openNavigation",
			closeNavigation: "closeNavigation",
			changePage: "changePage"
		}),
		handleChangePage(key) {
			this.closeNavigation();
			this.changePage(key);
		}
	}
};
</script>
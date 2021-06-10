<template>
	<div
		:style="cssWindowSize"
		class="front-page full-page"
	>
		<home-front-page-name />
		<home-front-page-mouse @click.native="handleClickIconMouse" />
	</div>
</template>

<script>
import HomeFrontPageName from "./HomeFrontPageName.vue";
import homeFrontPageMouse from "./HomeFrontPageMouse.vue";

export default {
	name: "HomeFrontPage",
	components: {
		HomeFrontPageName,
		homeFrontPageMouse
	},
	methods: {
		handleClickIconMouse() {
			this.$router.push({ name: "portfolios" });
		}
	}
};
</script>

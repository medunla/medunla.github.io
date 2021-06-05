<template>
	<div
		:style="cssWindowSize"
		class="front-page full-page"
	>
		<home-front-page-name />
		<home-front-page-mouse
			@onClick="handleOnClickMouse"
		/>
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
		handleOnClickMouse() {
			this.$emit("onClickIconMouse");
		}
	}
};
</script>

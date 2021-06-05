<template>
	<div id="app">
		<the-header />
		<the-morph />
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
	@import "./assets/styles/app";
</style>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMorph from "./components/TheMorph.vue";

export default {
	name: "App",
	components: {
		TheHeader,
		TheMorph
	},
	mounted() {
		this.getWindowSize(); // from mixin windowSize
		window.addEventListener("resize", this.getWindowSize, true); // from mixin windowSize
	},
	destroyed() {
		window.removedEventListener("resize", this.getWindowSize, true); // from mixin windowSize
	}
};
</script>


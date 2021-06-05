<template>
	<div class="hamburger hamburger--elastic" :class="{ 'is-active': isActive }"  @click="handleToggleNavigation">
		<div class="hamburger-box">
			<div class="hamburger-inner"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TheHamburger",
	props: {
		isActive: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		handleToggleNavigation() {
			if (this.isActive) {
				this.$emit("onCloseNavigation");
			} else {
				this.$emit("onOpenNavigation");
			}
		}
	}
};
</script>
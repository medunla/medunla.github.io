<template>
	<div
		:class="['hamburger hamburger-elastic', {
			'is-active': isActive,
			'is-change-color': isChangeColor
		}]"
		@click="handleToggleNavigation"
	>
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
	data() {
		return {
			scrollY: 0
		};
	},
	computed: {
		offset() {
			// NOTE: this.windowSize from mixin
			if (this.windowSize.width >= 1070) {
				return 150;
			} else if (this.windowSize.width >= 820) {
				return 120;
			}
			return 100;
		},
		isChangeColor() {
			return this.scrollY > this.offset;
		}
	},
	mounted() {
		this.handleSetScrollY();
		document.addEventListener("scroll", this.handleSetScrollY);
	},
	destroyed() {
		document.removeEventListener("scroll", this.handleSetScrollY);
	},
	methods: {
		handleToggleNavigation() {
			if (this.isActive) {
				this.$emit("onCloseNavigation");
			} else {
				this.$emit("onOpenNavigation");
			}
		},
		handleSetScrollY() {
			this.scrollY = window?.scrollY || 0;
		}
	}
};
</script>
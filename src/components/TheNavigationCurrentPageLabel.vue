<template>
	<div class="navigation-page-current" :class="{ 'is-show': text }">
		<span class="button-navigation-page-current">{{ text }}</span>
	</div>
</template>

<script>
export default {
	name: "TheNavigationCurrentPageLabel",
	props: {
		text: {
			type: String,
			default: null
		}
	}
};
</script>
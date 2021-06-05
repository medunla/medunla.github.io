<template>
	<nav class="navigation">
		<div class="wrapper">
			<ul v-if="pageList.length">
				<li
					v-for="page in pageList"
					:key="page.slug"
					:class="{ 'is-active': page.slug === currentPageSlug }"
					@click="handleChangePage(page.key)"
				>
					<span>{{ page.label }}</span>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "TheNavigation",
	props: {
		pageList: {
			type: Array,
			default: () => []
		},
		currentPageSlug: {
			type: String,
			default: null
		}
	},
	methods: {
		handleChangePage(key = null) {
			this.$emit("onChangePage", key);
		}
	}
};
</script>
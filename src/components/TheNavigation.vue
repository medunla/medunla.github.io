<template>
	<nav class="navigation">
		<div class="wrapper">
			<ul v-if="navigations.length">
				<li
					v-for="(navigation, index) in navigations"
					:key="index"
				>
					<router-link
						:to="navigation.to"
						exact-active-class="is-active"
						@click.native="handleChangePage"
					>
						<span>{{ navigation.label }}</span>
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "TheNavigation",
	data() {
		return {
			navigations: [
				{
					to: {
						name: "home"
					},
					label: "Home"
				},
				{
					to: {
						name: "portfolios"
					},
					label: "Portfolios"
				},
				{
					to: {
						name: "about"
					},
					label: "About"
				},
				{
					to: {
						name: "contact"
					},
					label: "Contact"
				}
			]
		};
	},
	methods: {
		handleChangePage() {
			this.$emit("onChangePage");
		}
	}
};
</script>
<template>
	<nav class="navigation">
		<div class="navigation-wrapper">
			<ul
				v-if="navigations.length"
				class="navigation-list"
			>
				<li
					v-for="(navigation, index) in navigations"
					:key="index"
				>
					<router-link
						:to="navigation.to"
						exact-active-class="is-active"
						class="navigation-list-item-link"
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
import { NAVIGATION_HOME, NAVIGATION_PORTFOLIOS, NAVIGATION_ABOUT, NAVIGATION_CONTACT } from "../assets/js/constant";

export default {
	name: "TheNavigation",
	data() {
		return {
			navigations: [
				{
					to: {
						name: NAVIGATION_HOME.name
					},
					label: NAVIGATION_HOME.label
				},
				{
					to: {
						name: NAVIGATION_PORTFOLIOS.name
					},
					label: NAVIGATION_PORTFOLIOS.label
				},
				{
					to: {
						name: NAVIGATION_ABOUT.name
					},
					label: NAVIGATION_ABOUT.label
				},
				{
					to: {
						name: NAVIGATION_CONTACT.name
					},
					label: NAVIGATION_CONTACT.label
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
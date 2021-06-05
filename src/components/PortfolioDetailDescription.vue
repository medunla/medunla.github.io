<template>
	<div class="portfolio-details">
		<h2 class="title">{{ portfolio.name }}</h2>
		<ul class="categorise">
			<li
				v-for="category in portfolio.categories"
				:key="category.name"
			>
				{{ category.name }}
			</li>
		</ul>
		<div class="description">
			<p v-if="portfolio.description">{{ portfolio.description }}</p>
			<div class="wrapper">
				<p v-if="portfolio.client"><b class="label">Client: </b> {{ portfolio.client }}</p>
				<p v-if="portfolio.demos.length > 0">
					<b class="label">Demo: </b>
					<span
						v-for="(demo, index) in portfolio.demos"
						:key="index"
					>
						<span v-if="index > 0">, </span>
						<a
							:href="demo.url"
							:title="demo.url"
							target="_blank"
						>
							Link{{ portfolio.demos.length > 1 ? ` ${index+1}` : '' }}
						</a>
					</span>
				</p>
				<p v-if="portfolio.app_stores.app_store">
					<b class="label">App store: </b>
					<a
						:href="portfolio.app_stores.app_store"
						:title="portfolio.app_stores.app_store"
						target="_blank"
					>
						Link
					</a>
				</p>
				<p v-if="portfolio.app_stores.play_store">
					<b class="label">Play store: </b>
					<a
						:href="portfolio.app_stores.play_store"
						:title="portfolio.app_stores.play_store"
						target="_blank"
					>
						Link
					</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PortfolioDetailDescription",
	props: {
		portfolio: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

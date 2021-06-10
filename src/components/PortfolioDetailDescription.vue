<template>
	<div class="portfolio-details">
		<h2 class="portfolio-details-title">{{ portfolio.name }}</h2>
		<ul class="portfolio-details-categorise">
			<li
				v-for="category in portfolio.categories"
				:key="category.name"
				class="portfolio-details-categorise-item"
			>
				{{ category.name }}
			</li>
		</ul>
		<div class="portfolio-details-description">
			<p v-if="portfolio.description">{{ portfolio.description }}</p>
			<div class="portfolio-details-description-wrapper">
				<p v-if="portfolio.client"><b class="portfolio-details-description-label">Client: </b> {{ portfolio.client }}</p>
				<p v-if="portfolio.demos.length > 0">
					<b class="portfolio-details-description-label">Demo: </b>
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
					<b class="portfolio-details-description-label">App store: </b>
					<a
						:href="portfolio.app_stores.app_store"
						:title="portfolio.app_stores.app_store"
						target="_blank"
					>
						Link
					</a>
				</p>
				<p v-if="portfolio.app_stores.play_store">
					<b class="portfolio-details-description-label">Play store: </b>
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

<template>
	<div class="swiper-slide">
		<div
			v-if="attachment.isVideo"
			class="embed-responsive embed-responsive-16by9"
		>
			<iframe
				:src="attachment.url"
				class="embed-responsive-item"
				allowfullscreen
			/>
		</div>
		<template v-else>
			<img
				:src="attachment.url"
				:alt="attachment.alt"
			/>
			<p v-if="attachment.caption">{{ attachment.caption }}</p>
		</template>
	</div>
</template>

<script>
export default {
	name: "PortfolioDetailAttachmentSlideItem",
	props: {
		attachment: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

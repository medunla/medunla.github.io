<template>
	<div class="content-group">
		<h4
			v-if="data.year"
			class="content-time color-blue"
		>
			{{ data.year }}
		</h4>
		<h4
			v-if="data.name"
			class="content-name"
		>
			{{ data.name }}
		</h4>
		<template v-if="data.details && data.details.length">
			<p
				v-for="(item, index) in data.details"
				:key="index"
			>
				{{ item }}
			</p>
		</template>
	</div>
</template>

<script>
export default {
	name: "AboutEducationItem",
	props: {
		data: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

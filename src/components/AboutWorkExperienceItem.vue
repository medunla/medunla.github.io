<template>
	<div class="about-content-item-content">
		<h4
			v-if="data.year"
			class="about-content-item-content-time color-blue"
		>
			{{ data.year }}
		</h4>
		<h4
			v-if="data.positionName"
			class="about-content-item-content-name"
		>
			{{ data.positionName }}
			<template v-if="data.companyName">
				<br>at {{ data.companyName }}
			</template>
		</h4>
		<ul
			v-if="data.details && data.details.length"
			class="about-content-item-content-detail-list"
		>
			<li
				v-for="(item, index) in data.details"
				:key="index"
				class="about-content-item-content-detail-list-item"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "AboutWorkExperienceItem",
	props: {
		data: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

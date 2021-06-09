<template>
	<div class="about-content-item">
		<h3 class="about-content-item-title">Skills</h3>
		<ul class="skill-list">
			<li
				v-for="skill in list"
				:key="skill.name"
				class="skill-list-item"
			>
				<div
					v-if="skill.image"
					class="skill-list-item-image"
				>
					<img
						:src="skill.image"
						:alt="skill.name"
						loading="lazy"
						class="skill-list-item-image-element"
					>
				</div>
				<p
					v-if="skill.name"
					class="skill-list-item-name"
				>
					{{ skill.name }}
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "AboutSkills",
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
};
</script>

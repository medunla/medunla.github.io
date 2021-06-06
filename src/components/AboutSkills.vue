<template>
	<div>
		<h3 class="content-title">Skills</h3>
		<ul class="skill-lists">
			<li
				v-for="skill in list"
				:key="skill.name"
			>
				<div
					v-if="skill.image"
					class="skill-image"
				>
					<img
						:src="skill.image"
						:alt="skill.name"
						loading="lazy"
					>
				</div>
				<p
					v-if="skill.name"
					class="skill-name"
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

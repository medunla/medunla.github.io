<template>
	<div class="about-content-item">
		<h3 class="about-content-item-title">Skills</h3>
		<div v-if="list.length">
			<div
				v-for="skillGroup in list"
				:key="skillGroup.type"
				class="skill-list-wrapper"
			>
				<h4 class="skill-list-title">{{ skillGroup.type }}</h4>
				<ul
					v-if="skillGroup.list.length"
					class="skill-list"
				>
					<li
						v-for="skill in skillGroup.list"
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
		</div>
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

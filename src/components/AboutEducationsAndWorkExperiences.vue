<template>
	<div>
		<section
			v-if="worksList.length"
			class="about-content-item"
		>
			<h3 class="about-content-item-title">Work Experience</h3>
			<about-work-experience-item
				v-for="(works, index) in worksList"
				:key="index"
				:data="works"
			/>
		</section>
		<section
			v-if="educationsList.length"
			class="about-content-item"
		>
			<h3 class="about-content-item-title">Education</h3>
			<about-education-item
				v-for="(education, index) in educationsList"
				:key="index"
				:data="education"
			/>
		</section>
	</div>
</template>

<script>
import AboutWorkExperienceItem from "./AboutWorkExperienceItem.vue";
import AboutEducationItem from "./AboutEducationItem.vue";

export default {
	name: "AboutEducationsAndWorkExperiences",
	props: {
		educationsList: {
			type: Array,
			default: () => []
		},
		worksList: {
			type: Array,
			default: () => []
		}
	},
	components: {
		AboutWorkExperienceItem,
		AboutEducationItem
	}
};
</script>

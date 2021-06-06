<template>
	<div>
		<template v-if="worksList.length">
			<h3 class="content-title">Work Experience</h3>
			<div class="box-shadow">
				<about-work-experience-item
					v-for="(works, index) in worksList"
					:key="index"
					:data="works"
				/>
			</div>

			<template v-if="educationsList.length">
				<br>
				<br>
			</template>
		</template>

		<template v-if="educationsList.length">
			<h3 class="content-title">Education</h3>
			<div class="box-shadow">
				<about-education-item
					v-for="(education, index) in educationsList"
					:key="index"
					:data="education"
				/>
			</div>
		</template>
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

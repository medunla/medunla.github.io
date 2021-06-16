<template>
	<div :class="['about-container container', {
		'is-page-ready': isPageReady,
		'hiding': isHiding
	}]">
		<div class="about-inner">
			<h2 class="about-inner-title">{{ data.name }}</h2>
			<img
				:src="data.imageUrl"
				:alt="data.name"
				class="about-inner-image"
				loading="lazy"
			>

			<div class="about-inner-wrapper">
				<div class="about-inner-overview">
					<p>{{ data.overview }}</p>
				</div>
				<div class="about-inner-column-row">
					<about-skills
						v-if="data.skills.length"
						:list="data.skills"
						class="about-inner-column-left"
					/>
					<about-educations-and-work-experiences
						v-if="data.educations.length || data.workExperiences.length"
						:educations-list="data.educations"
						:works-list="data.workExperiences"
						class="about-inner-column-right"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import skillsData from "../assets/js/skillsData";
import AboutSkills from "../components/AboutSkills.vue";
import AboutEducationsAndWorkExperiences from "../components/AboutEducationsAndWorkExperiences.vue";

export default {
	name: "AboutPage",
	title: "About ― Panupat K.",
	components: {
		AboutSkills,
		AboutEducationsAndWorkExperiences
	},
	data() {
		// Find experience years
		const startWorkDate = new Date("11/01/2015"); // M/D/Y
		const nowDate = new Date();
		const diffTime = Math.abs(nowDate - startWorkDate);
		const diffYearsFloat = diffTime / (1000 * 60 * 60 * 24 * 365);
		const diffYearsInt = Math.floor(diffYearsFloat);
		const experienceYears = (diffYearsFloat - diffYearsInt) > 0.8
			? diffYearsInt + 1
			: diffYearsInt;

		return {
			isPageReady: false,
			isHiding: false,
			data: {
				name: "Panupat Kammahawong",
				imageUrl: "img/panupat-image.jpg",
				overview: `I am a Front-end engineer with over ${experienceYears} years of experience. I am passionate about making beautiful UI and animations. My main abilities are HTML, CSS/SCSS, Javascript or build the website with Vue.js framework, My secondary abilities are in the back-end part such as PHP, MySQL and build a website with WordPress, Laravel, Ruby on Rails frameworks.`,
				skills: skillsData,
				educations: [
					{
						year: "2012 – 2015",
						name: "Faculty of Information and Communication Technology",
						details: [
							"Bachelor of Sciences - Degree in Information Technology for Design (Web & Interactive) - Silpakorn University, Bangkok Thailand"
						]
					}
				],
				workExperiences: [
					{
						year: {
							start: "Apr 2019",
							end: null
						},
						positionName: "Front-End Engineer",
						companyName: "MAQE Co., Ltd.",
						details: [
							"Create and build the front-end section of a website",
							"Code quality control to ensure ease of maintenance and focus on a good performance",
							"Create and build the product management system platform with microservices architecture",
							"Create and build the product browser platform for customer and sales",
							"Create and build the back-office e-commerce platform",
							"Create and build the insurance website and in-app website"
						]
					},
					{
						year: {
							start: "Nov 2015",
							end: "Mar 2019"
						},
						positionName: "Web Developer",
						companyName: "Backtobasics Design Co., Ltd.",
						details: [
							"Developed own platforms as a startup with Ruby on Rails and Laravel framework",
							"Front-end (HTML, CSS, SCSS, JavaScript, jQuery)",
							"Back-end with WordPress",
							"Improve and maintenance fulfillment platform provides storing, packing, shipping service for the customer"
						]
					}
				]
			}
		};
	},
	mounted() {
		setTimeout(() => {
			this.isPageReady = true;
		}, 100);
	},
	beforeRouteLeave(to, from, next) {
		this.isHiding = true;

		setTimeout(() => {
			window.scrollTo(0, 0);
			next();
		}, 500);
	}
};
</script>

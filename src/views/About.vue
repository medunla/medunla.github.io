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
				overview: `I have experience about web development for ${experienceYears} years. My main abilities is HTML, CSS/SCSS, Javascript, jQuery in front-end position and I can do backend position too with Wordpress, Ruby on Rails, Laravel. Other abilities related to web development are SEO(website structure), Progressive Web App, basic UI and Git for work with other developer.`,
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
						year: "Apr 2019 - Present",
						positionName: "Front-End Engineer",
						companyName: "MAQE Co., Ltd.",
						details: [
							"Create and build the front-end section of a website",
							"Code quality control to ensure ease of maintenance and a focus on good performance",
							"Create and build the product management system platform with microservices architecture",
							"Create and build a product browser platform for customer and sales",
							"Create and build the backoffice of e-commerce platform",
							"Create and build the insurance website and in-app website"
						]
					},
					{
						year: "Nov 2015 - Mar 2019",
						positionName: "Web Developer",
						companyName: "Backtobasics Design Co., Ltd.",
						details: [
							"Developed own platforms as a startup with Ruby on Rails and Laravel framework",
							"Front-end",
							"Back-end with Wordpress",
							"Improve and maintenance fulfilment platform provides storing, packing, shipping service for the customer"
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

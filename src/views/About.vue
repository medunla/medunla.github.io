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
				overview: `I have over ${experienceYears} years of expertise as a front-end developer. I'm highly interested in creating outstanding UI and transition animations. I'm an expert in HTML, CSS/SCSS, JavaScript, and the Vue.js framework. The website that I have experience with are E-commerce both in storefront and back-office, Product management systems, Product browsers for customers and sales, and Insurance websites.`,
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
							start: "Nov 2021",
							end: null
						},
						positionName: "Senior Front-End Engineer",
						companyName: "MAQE Co., Ltd."
					},
					{
						year: {
							start: "Apr 2019",
							end: "Oct 2021"
						},
						positionName: "Front-End Engineer",
						companyName: "MAQE Co., Ltd.",
						details: [
							{
								text: "Create and develop the website",
								children: [
									"E-commerce",
									"Back-office for E-commerce",
									"Product management system with microservices architecture",
									"Product browser for customers and sales",
									"Insurance"
								]
							},
							"Controlling the quality of the code to ensure that it is easy to maintain and perform well",
							"Collaborate with the designer, back-end, and QA",
							"Technical possibility of UX and UI concepts",
							"Lead front-end team in the project",
							"Estimate tasks and assign them to front-end members",
							"Advise junior developers"
						],
						isContinue: true
					},
					{
						year: {
							start: "Nov 2015",
							end: "Mar 2019"
						},
						positionName: "Web Developer",
						companyName: "Backtobasics Design Co., Ltd.",
						details: [
							"Create and develop the website with WordPress",
							"Created own platforms as a startup with Ruby on Rails and Laravel)",
							"Improved and maintenance the fulfillment platform provides storing, packing, and shipping service for the customer",
							"Work closely with CEO"
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

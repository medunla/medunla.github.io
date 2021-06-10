<template>
	<div :class="['contact-container container', {
		'is-page-ready': isPageReady,
		'hiding': isHiding
	}]">
		<div class="contact-inner">
			<h2 class="contact-inner-title">Please feel free to contact me</h2>
			<div class="contact-inner-wrapper">
				<div class="contact-inner-column-row">
					<contact-form />
					<contact-social-media-list
						v-if="socials.length"
						:list="socials"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import ContactSocialMediaList from "../components/ContactSocialMediaList.vue";

export default {
	name: "ContactPage",
	title: "Contact ― Panupat K.",
	components: {
		ContactForm,
		ContactSocialMediaList
	},
	data() {
		return {
			isPageReady: false,
			isHiding: false,
			socials: [
				{
					name: "github.com/medunla",
					url: "https://github.com/medunla",
					icon: {
						src: "img/social/github.svg",
						alt: "Github"
					}
				},
				{
					name: "linkedin.com/in/panupat-kammahawong",
					url: "https://www.linkedin.com/in/panupat-kammahawong-820551115/",
					icon: {
						src: "img/social/linkedin.svg",
						alt: "LinkedIn"
					}
				},
				{
					name: "facebook.com/medunla",
					url: "https://www.facebook.com/medunla",
					icon: {
						src: "img/social/facebook.svg",
						alt: "Facebook"
					}
				},
				{
					name: "+66 (0) 85 839 9063",
					url: "tel: +66858399063",
					icon: {
						src: "img/social/phone.svg",
						alt: "Phone number"
					}
				}
			]
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

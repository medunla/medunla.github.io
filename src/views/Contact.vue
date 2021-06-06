<template>
	<div class="contact-container container">
		<div class="contact-inner">
			<h2 class="title">Please feel free to contact me</h2>
			<div class="contact-inner-wrapper">
				<div class="column-row">
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
	}
};
</script>

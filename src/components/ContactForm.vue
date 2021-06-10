<template>
	<form
		action="https://pogaam.com/wp-content/themes/pogaam-light/inc/panupat-mail.php"
		method="POST"
		class="contact-form"
	>
		<div class="input">
			<input
				v-model="name"
				:class="{ 'is-fill': name }"
				type="text"
				id="name"
				name="name"
				required
			>
			<label for="name">Your full name</label>
			<span class="input-underline"></span>
		</div>
		<div class="input">
			<input
				v-model="email"
				:class="{ 'is-fill': email }"
				type="email"
				id="email"
				name="email"
				required
			>
			<label for="email">Your Email</label>
			<span class="input-underline"></span>
		</div>
		<div class="input">
			<input
				v-model="subject"
				:class="{ 'is-fill': subject }"
				type="text"
				id="subject"
				name="subject"
				required
			>
			<label for="subject">Subject</label>
			<span class="input-underline"></span>
		</div>
		<div class="input">
			<textarea
				v-model="message"
				:class="{ 'is-fill': message }"
				id="message"
				name="message"
				rows="5"
			/>
			<label for="message">Message</label>
			<span class="input-underline"></span>
		</div>
		<div class="text-right">
			<button
				type="submit"
				class="button-blue uppercase"
			>
				Send
			</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "ContactForm",
	data() {
		return {
			name: "",
			email: "",
			subject: "",
			message: ""
		};
	}
};
</script>

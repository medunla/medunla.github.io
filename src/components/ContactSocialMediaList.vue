<template>
	<ul class="social-lists">
		<li
			v-for="social in list"
			:key="social.name"
		>
			<a
				:href="social.url"
				:title="social.name"
				target="_blank"
				rel="noopener"
			>
				<img
					v-if="social.icon && social.icon.src"
					:src="social.icon.src"
					:alt="social.icon.alt"
				/>
				<span v-if="social.name">
					{{ social.name }}
				</span>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: "ContactSocialMediaList",
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
};
</script>

const getTitle = (vm) => {
	const { title } = vm.$options;

	if (title) {
		return typeof title === "function"
			? title.call(vm)
			: title;
	}
	return null;
}

export default {
	created() {
		this.setPageTitle();
	},
	methods: {
		setPageTitle(title) {
			const pageTitle = title || getTitle(this);

			if (pageTitle) {
				document.title = pageTitle;
			}
		}
	}
}
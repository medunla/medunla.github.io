import { mapActions, mapState } from "vuex";

export default {
	computed: {
		...mapState({
			windowSize: (state) => state.windowSize
		}),
		cssWindowSize() {
			console.log(this.windowSize.width, this.windowSize.height);
			return this.windowSize.width && this.windowSize.height
				? `width: ${this.windowSize.width}px;height: ${this.windowSize.height}px;`
				: "";
		}
	},
	methods: {
		...mapActions({
			updateWindowSize: "updateWindowSize"
		}),
		getWindowSize() {
			const w = window;
			const d = document;
			const e = d.documentElement;
			const g = d.getElementsByTagName("body")[0];

			const width = w.innerWidth || e.clientWidth || g.clientWidth;
			const height = w.innerHeight || e.clientHeight || g.clientHeight;

			this.updateWindowSize({
				width,
				height
			});
		}
	}
}
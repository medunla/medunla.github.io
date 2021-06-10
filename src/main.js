import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import "snapsvg-cjs";
import title from "./mixins/title";
import windowsize from "./mixins/windowSize";

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.mixin(title);
Vue.mixin(windowsize);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");

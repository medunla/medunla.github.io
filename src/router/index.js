import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PortfolioDetail from "../views/PortfolioDetail.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		meta: {
			label: "Home"
		}
	},
	{
		path: "/portfolios",
		name: "portfolios",
		component: Home,
		meta: {
			label: "Portfolios"
		}
	},
	{
		path: "/portfolios/:slug",
		name: "portfolioDetail",
		component: PortfolioDetail,

	},
	{
		path: "/about",
		name: "about",
		component: About,
		meta: {
			label: "About"
		}

	},
	{
		path: "/contact",
		name: "contact",
		component: Contact,
		meta: {
			label: "Contact"
		}

	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;

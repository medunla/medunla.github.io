import Vue from "vue";
import Vuex from "vuex";
import { pageList } from "../assets/js/constant";

Vue.use(Vuex);

const OPEN_NAVIGATION = "OPEN_NAVIGATION";
const CLOSE_NAVIGATION = "CLOSE_NAVIGATION";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const UPDATE_WINDOW_SIZE = "UPDATE_WINDOW_SIZE";

const defaultPage = pageList.HOME;

export default new Vuex.Store({
	state: {
		header: {
			pageList: [
				pageList.HOME,
				pageList.PORTFOLIOS,
				pageList.ABOUT,
				pageList.CONTACT
			],
			currentPage: defaultPage,
			isOpenedNavgation: false
		},
		windowSize: {
			width: 0,
			height: 0
		}
	},
	mutations: {
		[OPEN_NAVIGATION](state) {
			state.header = {
				...state.header,
				isOpenedNavgation: true
			};
		},
		[CLOSE_NAVIGATION](state) {
			state.header = {
				...state.header,
				isOpenedNavgation: false
			};
		},
		[SET_CURRENT_PAGE](state, key = null) {
			let currentPage = defaultPage;
			if (typeof key === "string") {
				currentPage = pageList[key] || defaultPage;
			} else if (typeof key === "object") {
				currentPage = key;
			}

			state.header = {
				...state.header,
				currentPage
			};
		},
		[UPDATE_WINDOW_SIZE](state, { width, height }) {
			state.windowSize = {
				width,
				height
			};
		},
	},
	actions: {
		openNavigation({ commit }) {
			commit(OPEN_NAVIGATION);
		},
		closeNavigation({ commit }) {
			commit(CLOSE_NAVIGATION);
		},
		setCurrentPage({ commit }, key) {
			commit(SET_CURRENT_PAGE, key);
		},
		updateWindowSize({ commit }, data) {
			commit(UPDATE_WINDOW_SIZE, data);
		}
	},
});

import Vue from "vue";
import Vuex from "vuex";
import { pageList } from "../assets/js/constant";

Vue.use(Vuex);

const OPEN_NAVIGATION = "OPEN_NAVIGATION";
const CLOSE_NAVIGATION = "CLOSE_NAVIGATION";
const CHANGE_PAGE = "CHANGE_PAGE";
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
		[CHANGE_PAGE](state, key = null) {
			state.header = {
				...state.header,
				currentPage: pageList[key] || defaultPage
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
		changePage({ commit }, key) {
			commit(CHANGE_PAGE, key);
		},
		updateWindowSize({ commit }, data) {
			commit(UPDATE_WINDOW_SIZE, data);
		}
	},
});

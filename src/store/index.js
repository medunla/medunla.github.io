import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const OPEN_NAVIGATION = "OPEN_NAVIGATION";
const CLOSE_NAVIGATION = "CLOSE_NAVIGATION";
const SET_PORTFOLIO_DETAIL_DATA = "SET_PORTFOLIO_DETAIL_DATA";
const UPDATE_WINDOW_SIZE = "UPDATE_WINDOW_SIZE";

export default new Vuex.Store({
	state: {
		header: {
			isOpenedNavgation: false
		},
		windowSize: {
			width: 0,
			height: 0
		},
		portfolioDetail: {
			name: null
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
		[SET_PORTFOLIO_DETAIL_DATA](state, data) {
			state.portfolioDetail = {
				...state.portfolioDetail,
				...data
			}
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
		setPortfolioDetailData({ commit }, data) {
			commit(SET_PORTFOLIO_DETAIL_DATA, data);
		},
		updateWindowSize({ commit }, data) {
			commit(UPDATE_WINDOW_SIZE, data);
		}
	},
});

import Vue from "vue";
import Vuex from "vuex";
import crud from "./modules/Crud.js";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		showDialogForm: false,
		showOverlayLoader: false,
		snackbarState: false,
		snackbarText: "",
		snackbarTime: -1,
		snackbarColor: "",
	},
	mutations: {
		openDialogForm(state) {
			state.showDialogForm = true;
		},
		closeDialogForm(state) {
			state.showDialogForm = false;
		},
		openOverlayLoader(state) {
			console.log("close");
			state.showOverlayLoader = true;
		},
		closeOverlayLoader(state) {
			console.log("open");
			state.showOverlayLoader = false;
		},
		openSnackbar(state, { text = "", time = 3000, type = "" } = {}) {
			state.snackbarTime = time;
			state.snackbarText = text;
			state.snackbarState = true;
			switch (type) {
				case "error":
					state.snackbarColor = "#BF2600";
					break;
				case "success":
					state.snackbarColor = "#00875A";
					break;
				case "":
					state.snackbarColor = "#5243AA";
					break;
			}
		},
		closeSnackbar(state) {
			state.snackbarState = false;
		},
	},
	getters: {
		showDialogForm: (state) => state.showDialogForm,
		showOverlayLoader: (state) => state.showOverlayLoader,
		snackbarState: (state) => state.snackbarState,
		snackbarText: (state) => state.snackbarText,
		snackbarTime: (state) => state.snackbarTime,
		snackbarColor: (state) => state.snackbarColor,
	},
	actions: {
		apiCall({ commit }, config) {
			return new Promise((resolve, reject) => {
				axios({
					...config,
				})
					.then((response) => {
						let data = response.data;
						commit("closeOverlayLoader");
						resolve(data);
					})
					.catch((err) => {
						reject(err);
						commit("closeOverlayLoader");
					});
			});
		},
		downloadFile(context, payload) {
			console.log(payload);
			axios({
				url: payload.url,
				method: "GET",
				responseType: "blob",
			}).then((response) => {
				// create file link in browser's memory
				const href = URL.createObjectURL(response.data);

				// create "a" HTLM element with href to file & click
				const link = document.createElement("a");
				link.href = href;
				link.setAttribute("download", payload.name); //or any other extension
				document.body.appendChild(link);
				link.click();

				// clean up "a" element & remove ObjectURL
				document.body.removeChild(link);
				URL.revokeObjectURL(href);
			});
		},
	},
	modules: {
		crud,
	},
});

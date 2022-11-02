


const apiEndPoint = "https://fabricvis.foyr.com/"
// const apiEndPoint = "https://e5bf-169-150-207-110.in.ngrok.io/"


const state = {

}

const gettters = {

}

const mutations = {

}

const actions = {
    getRoomStyles: ({ commit, dispatch }) => {
        return dispatch(
            "apiCall",
            {
                method: "get",
                url: `${apiEndPoint}RoomStyles/v1.0/`,
                headers: {}
            },
            { root: true }
        ).then((response) => {
            return response.data;
        }).catch((error) => {
            console.error(error);
            commit("openSnackbar", {
                text: "Something went wrong, refresh the page!",
                type: "error",
            }, { root: true });
        })
    },
    postRoomStyles: ({ commit, dispatch }, data) => {
        return dispatch(
            "apiCall",
            {
                data: data,
                method: "post",
                url: `${apiEndPoint}RoomStyles/v1.0/`,
                headers: {}
            },
            { root: true }
        ).then((response) => {
            commit("openSnackbar", {
                text: "Sucesssfully created the room",
                type: "success",
            }, { root: true });
            return response.data;
        }).catch((error) => {
            if (error.response) {
                const errObj = error.response.data
                let err = '';
                if (Object.prototype.hasOwnProperty.call(errObj, "errorFields")) {
                    let firstError = Object.keys(errObj.errorFields)[0]
                    err = errObj.errorFields[firstError]
                }
                else if (Object.prototype.hasOwnProperty.call(errObj, "message")) {
                    err = errObj.message
                }
                commit("openSnackbar", {
                    text: err ? err : "Failed to upload, please try again!",
                    type: "error",
                }, { root: true });
            }

        })
    },
    updateRoomStyles: ({ commit, dispatch }, data) => {
        return dispatch(
            "apiCall",
            {
                data: data,
                method: "put",
                url: `${apiEndPoint}RoomStyles/v1.0/`,
                headers: {}
            },
            { root: true }
        ).then((response) => {
            commit("openSnackbar", {
                text: "Sucesssfully updated the room",
                type: "success",
            }, { root: true });
            return response.data;
        }).catch((error) => {
            console.error(error);
            if (error.response) {
                const errObj = error.response.data
                let err = '';
                if (Object.prototype.hasOwnProperty.call(errObj, "errorFields")) {
                    let firstError = Object.keys(errObj.errorFields)[0]
                    err = errObj.errorFields[firstError]
                }
                else if (Object.prototype.hasOwnProperty.call(errObj, "message")) {
                    err = errObj.message
                }
                commit("openSnackbar", {
                    text: err ? err : "Failed to update your changes, please try again!",
                    type: "error",
                }, { root: true });
            }
        })
    },
    deleteRoomStyle: ({ commit, dispatch }, data) => {
        return dispatch(
            "apiCall",
            {
                data: data,
                method: "delete",
                url: `${apiEndPoint}RoomStyles/v1.0/`,
                headers: {}
            },
            { root: true }
        ).then((response) => {
            commit("openSnackbar", {
                text: "Sucesssfully deleted the room",
                type: "success",
            }, { root: true });
            return response.data;
        }).catch((error) => {
            console.error(error);
            commit("openSnackbar", {
                text: "Failed to delete the room, please try again!",
                type: "error",
            }, { root: true });
        })
    },
    moveRenders: ({ commit, dispatch }, data) => {
        return dispatch(
            "apiCall",
            {
                data: data,
                method: "get",
                url: `${apiEndPoint}Fabrics/v1.0/update-fabric-renders/${data._id}`,
                headers: {}
            },
            { root: true }
        ).then((response) => {
            commit("openSnackbar", {
                text: "Renders moved sucesssfully ",
                type: "success",
            }, { root: true });
            return response.data;
        }).catch((error) => {
            console.error(error);
            commit("openSnackbar", {
                text: "Failed to move renders, please try again!",
                type: "error",
            }, { root: true });
        })
    },
    publishOptions: ({ commit, dispatch }, data) => {
        return dispatch(
            "apiCall",
            {
                method: "put",
                url: `${apiEndPoint}PresetOptions/v1.0/publish-options/${data._id}`,
                headers: {}
            },
            { root: true }
        ).then((response) => {
            commit("openSnackbar", {
                text: "options published sucesssfully",
                type: "success",
            }, { root: true });
            return response.data;
        }).catch((error) => {
            console.error(error);
            commit("openSnackbar", {
                text: "Failed to publish options, please try again!",
                type: "error",
            }, { root: true });
        })
    },
}
export default {
    namespaced: true,
    state,
    gettters,
    mutations,
    actions,
}
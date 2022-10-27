


const apiEndPoint = "https://fabricvis.foyr.com/"
// const apiEndPoint = "https://e5bf-169-150-207-110.in.ngrok.io/"


const state = {

}

const gettters = {

}

const mutations = {

}

const actions = {
    getRoomStyles: ({ dispatch }) => {
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
        })
    },
    postRoomStyles: ({ dispatch }, data) => {
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
            return response.data;
        }).catch((error) => {
            console.error(error);
        })
    },
    updateRoomStyles: ({ dispatch }, data) => {
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
            return response.data;
        }).catch((error) => {
            console.error(error);
        })
    },
    deleteRoomStyle: ({ dispatch }, data) => {
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
            return response.data;
        }).catch((error) => {
            console.error(error);
        })
    },
    moveRenders: ({ dispatch }, data) => {
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
            return response.data;
        }).catch((error) => {
            console.error(error);
        })
    },
    publishOptions: ({ dispatch }, data) => {
        return dispatch(
            "apiCall",
            {
                method: "put",
                url: `${apiEndPoint}PresetOptions/v1.0/publish-options/${data._id}`,
                headers: {}
            },
            { root: true }
        ).then((response) => {
            return response.data;
        }).catch((error) => {
            console.error(error);
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
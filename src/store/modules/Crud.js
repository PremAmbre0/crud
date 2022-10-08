


const apiEndPoint = "https://56e2-103-173-241-213.in.ngrok.io/"


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
}
export default {
    namespaced: true,
    state,
    gettters,
    mutations,
    actions,
}
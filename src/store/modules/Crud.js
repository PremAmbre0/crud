


const apiEndPoint = "https://3edd-103-173-241-68.in.ngrok.io/"


const state = {

}

const gettters = {

}

const mutations = {

}

const actions = {
    getRoomStyles: ({dispatch}) => {
        return dispatch(
            "apiCall",
            {
                method: "get",
                url: `${apiEndPoint}RoomStyles/v1.0/?description=desc`,
                headers: {}
            },
            { root :true}
        ).then((response)=>{
            return response.data;
        }).catch((error)=>{
            console.error(error);
        })
    }

}
export default {
    namespaced: true,
    state,
    gettters,
    mutations,
    actions,
}
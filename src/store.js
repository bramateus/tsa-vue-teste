import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        login: false,
        usuario: {
            usu_array: [],
            id: "",
        }
    },
    mutations: {
        UPDATE_LISTA(state, payload){
            state.usuario.usu_array.push(payload);
        }
    },
    actions: {}
});
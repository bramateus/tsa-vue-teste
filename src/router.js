import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"
import Lista from "./views/Lista.vue"

Vue.use(Router);


export default new Router({
    
    mode: "history",
    base: 'tsa-vue-teste/',
    // base: '/',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/lista",
            component: Lista
        }
    ]

}) 


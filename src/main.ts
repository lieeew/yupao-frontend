import { createApp } from 'vue'
// 1. Import the components you need
import Vant from 'vant';
import * as VueRouter from 'vue-router';
import App from './App.vue'
import routes from "./config/router.ts";
import 'vant/lib/index.css';

const app = createApp(App);

// creat router instance
const router = VueRouter.createRouter({
    // Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 直接全部引入了,但是建议是按需引入
app.use(Vant);
app.use(router);
app.mount("#app");





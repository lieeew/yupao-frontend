import { createApp } from 'vue'
// 1. Import the components you need
import { Button, Icon, NavBar, Tabbar, TabbarItem } from 'vant';
import { Toast } from 'vant';
import * as VueRouter from 'vue-router';
import App from './App.vue'
import routes from "./config/router.ts";
const app = createApp(App);

// creat router instance
const router = VueRouter.createRouter({
    // Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})
// Register the components you need
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(Toast);
app.use(TabbarItem)
app.use(router)
app.mount("#app");





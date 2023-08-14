import { createApp } from 'vue'
// 1. Import the components you need
import { Button, Icon, NavBar, Tabbar, TabbarItem } from 'vant';
import { Toast } from 'vant';
// 2. Import the components style
import App from './App.vue'
const app = createApp(App);
app.config.globalProperties.$Toast = Toast
// 3. Register the components you need
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(Toast);
app.use(TabbarItem)
app.mount("#app");






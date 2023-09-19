import {createApp} from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import routes from "./config/route";
import Vant from 'vant';
import 'vant/lib/index.css';
import '../global.css'
import index from "./pages/Index.vue";

const app = createApp(App);
app.use(Vant);

const router = VueRouter.createRouter(
    {
        // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
        history: VueRouter.createWebHistory(),
        routes, // `routes: routes` 的缩写
    }
)

app.use(router);
app.mount('#app')


//
// 1、前端只能访问首页，其他页面报错404，在查看星球其他大神的帖子找到答案，感谢！
//     location / {
//         try_files $uri $uri/ @router;#需要指向下面的@router否则会出现vue的路由在
//         index index.html index.htm;
//     }
// #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找
// #因此需要rewrite到index.html中，然后交给路由在处理请求资源
// location @router {
//     rewrite ^.*$ /index.html last;
// }

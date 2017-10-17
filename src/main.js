import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式
import waves from './directive/waves';// 水波纹指令

Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(waves);

const whiteList = ['/signIn', '/authredirect', '/reset', '/sendpwd'];// 不重定向白名单
const token = false; // 都放到 store 中， 在 beforeEach 中判断和更新 store 中数据->根据当前时间设置超时时间

router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress

    if (token) { // 判断是否有token
        if (to.path === '/signIn' || to.path === '/signUp') {
            next({ path: '/' });
        } else {
            next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next();
        } else {
            next('/signIn'); // 否则全部重定向到登录页
            NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        }
    }
});

router.afterEach((to, from, next) => {
    // 设置 title
    let title = to.meta.title;
    document.title = 'vue2-template' + (title ? '-'+title : '');

    NProgress.done(); // 结束Progress
});

Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

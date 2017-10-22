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

import {asyncRouterMap, notFoundRouterMap} from '@/router';
import {levelMatch,verifyToken} from '@/utils';

Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(waves);

const whiteList = ['/signIn', '/authredirect', '/reset', '/sendpwd'];// 不重定向白名单
// 都放到 store 中， 在 beforeEach 中判断和更新 store 中数据->根据当前时间设置超时时间
router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress

    let isValidToken = verifyToken(store.getters.getToken,
                            store.getters.getLastActionTime,
                            store.getters.getLastActionTimeCrypt);
    console.log('to', to);
    // 登录 并且 未超时
    if (store.getters.getToken && isValidToken) { // 判断是否有token 并且 token有效
        store.dispatch('VX_CONTINUE_TOKEN'); // 刷新token时间
        if (to.path === '/signIn' || to.path === '/signUp') {
            next({ path: '/' });
        } else {
            // 页面刷新 或 通过地址栏直接访问url
            let menuList = store.getters.getMenuList;
            // console.log('menuList1',menuList);
            if(!(menuList instanceof Array) || menuList.length === 0) { // 在VUEX中，没有持久化的后台菜单
                // console.log('menuList2',menuList);
                store.dispatch('VX_GET_MENU', store.getters.getToken).then(() => {
                    menuList = store.getters.getMenuList;
                    console.log('getPermissionRouterList', store.getters.getPermissionRouterList); // TODO 到这里有打印
                    router.addRoutes(store.getters.getPermissionRouterList); // 动态添加可访问路由表
                    console.log('added routers'); // TODO 到这里没有打印
                    next({ ...to });
                }).catch(() => {
                    store.dispatch('VX_SIGN_OUT').then(() => {
                        next({path:'/signIn'});
                    });
                });
            } else {
                next();
            }
        }
    } else {
        console.log('过期');
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

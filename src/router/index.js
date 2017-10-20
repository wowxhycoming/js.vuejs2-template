import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout';

const importComponent = fileName => () => import('@/components/' + fileName);

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/signIn', component: importComponent('signIn/index'), hidden: true},
        {path: '/test', component: importComponent('test/test'), hidden: true},
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            name: '首页',
            hidden: true,
            children: [{ path: 'dashboard', component: importComponent('test/test') }]
        }
    ]
});

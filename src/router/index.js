import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            // redirect: '/dashboard',
            name: '首页',
            hidden: true,
            // children: [{ path: 'dashboard', component: 'dashboard/index' }]
        },
    ]
})

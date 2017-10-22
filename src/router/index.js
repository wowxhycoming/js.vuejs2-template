import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout';

const importComponent = fileName => () => import('@/components/' + fileName);

Vue.use(Router);


export const constantRouterMap = [
    {path: '/signIn', component: importComponent('signIn/index'), hidden: true},
    {path: '/test', component: importComponent('test/test'), hidden: true},
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: '首页',
        hidden: true,
        children: [{path: 'dashboard', component: importComponent('test/test')}]
    }
];


export const asyncRouterMap = [
    {
        path: '/a',
        component: Layout,
        redirect: '/a/index',
        name: 'A',
        noDropdown: true,
        children: [{path: 'index', component: importComponent('test/a/index'), name: 'A-index'}]
    },
    {
        path: '/b',
        component: Layout,
        redirect: '/b/index',
        name: 'B',
        children: [
            {path: 'index', component: importComponent('test/b/index'), name: 'B-index'},
            {path: 'b1', component: importComponent('test/b/b1'), name: 'B-b1'},
            {path: 'b2', component: importComponent('test/b/b2'), name: 'B-b2'}
        ]
    },
    {
        path: '/c',
        component: Layout,
        redirect: '/c/index',
        name: 'C',
        children: [
            {
                path: 'index', component: importComponent('test/b/index'), name: 'C-index',
                children: [
                    {path: 'indexc1', component: importComponent('test/c/indexc1'), name: 'C-index-c1'},
                    {path: 'indexc2', component: importComponent('test/c/indexc2'), name: 'C-index-c2'},
                ]
            },
            {path: 'c1', component: importComponent('test/c/c1'), name: 'C-c1'},
            {path: 'c2', component: importComponent('test/c/c2'), name: 'C-c2'}
        ]
    },

    // {path: '*', redirect: '/404', hidden: true}
];

export const notFoundRouterMap = [
    {path: '*', redirect: '/404', hidden: true}
];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
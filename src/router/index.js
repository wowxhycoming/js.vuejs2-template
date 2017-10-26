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
        displayName: '首页',
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
        displayName: '权限测试A',
        noDropdown: true,
        children: [{
            path: 'index',
            component: importComponent('test/a/index'),
            name: 'A-index',
            displayName: '权限测试A-index',
        }]
    },
    {
        path: '/b',
        component: Layout,
        redirect: '/b/index',
        name: 'B',
        displayName: '权限测试B',
        children: [
            {path: 'index', component: importComponent('test/b/index'), name: 'B-index', displayName: '权限测试B-index',},
            {path: 'b1', component: importComponent('test/b/b1'), name: 'B-b1', displayName: '权限测试B-b1'},
            {path: 'b2', component: importComponent('test/b/b2'), name: 'B-b2', displayName: '权限测试B-b2',}
        ]
    },
    {
        path: '/c',
        component: Layout,
        // redirect: 'noredirect',
        name: 'C',
        displayName: '权限测试C',
        children: [
            {path: '/c/index', component: importComponent('test/c/index'), name: 'C-index', displayName: '权限测试C-index',
                children: [
                    {path: 'c11', component: importComponent('test/c/indexc1'), name: 'C-index-c1', displayName: '权限测试C-index-c1'},
                    {path: 'c12', component: importComponent('test/c/indexc2'), name: 'C-index-c2', displayName: '权限测试C-index-c2'},
                ]
            },
            {path: 'c1', component: importComponent('test/c/c1'), name: 'C-c1', displayName: '权限测试C-c1',},
            {path: 'c2', component: importComponent('test/c/c2'), name: 'C-c2', displayName: '权限测试C-c1',}
        ]
    }
];

export const notFoundRouterMap = [
    {path: '*', redirect: '/404', hidden: true}
];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
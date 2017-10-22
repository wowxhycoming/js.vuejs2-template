import types from '../types';
import {signIn, getMenuList} from '@/api/authApi';
import {constantRouterMap, asyncRouterMap, notFoundRouterMap} from '@/router';
import {levelMatch,verifyToken} from '@/utils';

const menu ={
    state: {
        menuList:[],
        asyncPermissionRouterList:[],
        allPermissionRouterList:[]
    },
    actions:{
        [types.VX_GET_MENU]: ({commit}, token) => {
            return new Promise((resolve, reject) => {
                getMenuList(token).then(res => {
                    const menuList = res.data;
                    const asyncPermissionRouterList = levelMatch(menuList, asyncRouterMap).concat(notFoundRouterMap);
                    commit(types.VX_GET_MENU, {menuList,asyncPermissionRouterList});
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        },
    },
    mutations: {
        [types.VX_GET_MENU]: (state, data) => {
            state.menuList = data.menuList;
            state.asyncPermissionRouterList = data.asyncPermissionRouterList;
            state.allPermissionRouterList = constantRouterMap.concat(data.asyncPermissionRouterList);
        }
    }
}

export default menu;
import types from '../types';
import {signIn, getMenuList} from '@/api/authApi';
import {constantRouterMap, asyncRouterMap, notFoundRouterMap} from '@/router';
import {levelMatch,verifyToken} from '@/utils';

const menu ={
    state: {
        menuList:[],
        allPermissionRouterList:[]
    },
    actions:{
        [types.VX_GET_MENU]: ({commit}, token) => {
            return new Promise((resolve, reject) => {
                getMenuList(token).then(res => {
                    const menuList = res.data;
                    const allPermissionRouterList = constantRouterMap.concat(levelMatch(menuList, asyncRouterMap).concat(notFoundRouterMap));
                    commit(types.VX_GET_MENU, {menuList,allPermissionRouterList});
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
            state.allPermissionRouterList = data.allPermissionRouterList;
        }
    }
}

export default menu;
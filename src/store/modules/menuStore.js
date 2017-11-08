import types from '../types';
import {signin, getMenuList} from '@/api/authApi';
import {constantRouterMap, asyncRouterMap, notFoundRouterMap} from '@/router';
import {levelMatch, verifyToken} from '@/utils';

const menu = {
    state: {
        menuList: [],
        asyncPermissionRouterList: [],
        allPermissionRouterList: []
    },
    actions: {
        [types.VX_GET_MENU]: ({commit}, token) => {
            return new Promise((resolve, reject) => {
                getMenuList(token).then(res => {
                    const data = res.data;
                    let menuList = data.data;
                    if(!(menuList instanceof Array)) {
                        menuList = []; // 避免组装菜单失败，无限请求获取菜单接口
                    }
                    console.log('VX_GET_MENU action menuList', menuList);
                    const asyncPermissionRouterList = levelMatch(menuList, asyncRouterMap).concat(notFoundRouterMap);
                    console.log('VX_GET_MENU action asyncPermissionRouterList', asyncPermissionRouterList);
                    commit(types.VX_GET_MENU, {menuList, asyncPermissionRouterList});
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
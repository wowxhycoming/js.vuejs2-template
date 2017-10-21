import types from '../types';
import {signIn, getMenuList} from '@/api/authApi';

const menu ={
    state: {
        menuList:[]
    },
    actions:{
        [types.VX_GET_MENU]: ({commit}, token) => {
            return new Promise((resolve, reject) => {
                getMenuList(token).then(res => {
                    const menuList = res.data;
                    commit(types.VX_GET_MENU, menuList);
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        },
    },
    mutations: {
        [types.VX_GET_MENU]: (state, menuList) => {
            state.menuList = menuList;
        }
    }
}

export default menu;
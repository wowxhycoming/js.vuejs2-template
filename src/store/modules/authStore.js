import types from '../types';

const menu = {
    state: {
        userName:'',
        token:'',
        menuList:[]
    },
    actions: {
        [types.VX_USER_MENU] : ({commit}, username) => {

            commit();
        }
    },
    mutations: {
        [types.VX_USER_MENU]: state => {

            state.menuList = [];
        }
    }
};
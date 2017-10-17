import types from '../types';
import authApi from '@/api/authApi';

const menu = {
    state: {
        userName:'',
        token:'',
        menuList:[]
    },
    actions: {
        [types.VX_SIGN_IN]: ({commit}, userInfo) => {

            commit();
        },
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
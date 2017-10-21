import types from '../types';
import {signIn, getMenuList} from '@/api/authApi';

const auth = {
    state: {
        username: '',
        token: '',
        lastActionTime: '',
    },
    actions: {
        [types.VX_SIGN_IN]: ({commit}, userInfo) => {
            console.log('action userInfo=', userInfo);
            const username = userInfo.username.trim();
            const password = userInfo.password;
            return new Promise((resolve, reject) => {
                signIn(username, password).then(res => {
                    const data = res.data;
                    commit(types.VX_SIGN_IN, data);
                    // commit(types.VX_GET_MENU, data.menuList);
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.VX_CONTINUE_TOKEN]: ({commit}) => {
            return new Promise(resolve => {
                commit(types.VX_CONTINUE_TOKEN);
                resolve();
            });
        },

        [types.VX_SIGN_OUT]: ({commit}) => {
            return new Promise((resolve, reject) => {
                commit(types.VX_SIGN_OUT);
            });
        }
    },
    mutations: {
        [types.VX_SIGN_IN]: (state, data) => {
            state.username = data.username;
            state.token = data.token;
            state.lastActionTime = new Date();
        },
        [types.VX_CONTINUE_TOKEN]: state => {
            if (state.token !== '') {
                state.lastActionTime = new Date();
            }
        },

        [types.VX_SIGN_OUT]: state => {
            state.username = '';
            state.token = '';
            state.lastActionTime = '';
            // state.menuList = [];
        }
    }
};

export default auth;
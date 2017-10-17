import types from '../types';
import {signIn} from '@/api/authApi';

const auth = {
    state: {
        username:'',
        token:'',
        lastActionTime:'',
        menuList:[]
    },
    actions: {
        [types.VX_SIGN_IN]: ({commit}, userInfo) => {
            console.log(userInfo);
            const username = userInfo.username.trim();
            const password = userInfo.password;
            return new Promise((resolve, reject) => {
                signIn(username, password).then(res => {
                    const data = res.data;
                    commit(types.VX_SIGN_IN, data);
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });

            commit();
        },
        [types.VX_USER_MENU] : ({commit}, data) => {

            commit();
        }
    },
    mutations: {
        [types.VX_SIGN_IN]: (state, data) => {
            state.username = data.username;
            state.token = data.token;
            state.lastActionTime = new Date();
            state.menuList = data.menuList;
        },
        [types.VX_USER_MENU]: state => {

            state.menuList = [];
        }
    }
};

export default auth;
import types from '../types';
import {signIn} from '@/api/authApi';
// import {setStorage, getStorage} from '../local';

// const key = 'auth';
// const state = getStorage(key) || {
//         username: '',
//         token: '',
//         lastActionTime: '',
//         menuList: []
//     };

const auth = {
    // state: state,
    state: {
        username: '',
        token: '',
        lastActionTime: '',
        menuList: []
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
        [types.VX_USER_MENU]: ({commit}, data) => {

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
        [types.VX_CONTINUE_TOKEN]: state => {
            if(state.token !== '') {
                state.lastActionTime = new Date();
            }
        },
        [types.VX_USER_MENU]: state => {
            state.menuList = [];
        }
    }
};

export default auth;
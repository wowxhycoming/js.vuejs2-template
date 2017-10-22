import types from '../types';
import {signIn, getMenuList} from '@/api/authApi';
import {cryptLastActionTime} from '@/utils';

const auth = {
    state: {
        username: '',
        token: '',
        lastActionTime: '',
        lastActionTimeCrypt:''
    },
    actions: {
        [types.VX_SIGN_IN]: ({commit}, userInfo) => {
            const username = userInfo.username.trim();
            const password = userInfo.password;
            const dateTime = new Date().toISOString();

            return new Promise((resolve, reject) => {
                signIn(username, password).then(res => {
                    const data = res.data;
                    data.lastActionTime = dateTime;
                    const crypt = cryptLastActionTime(data.token + dateTime);
                    data.lastActionTimeCrypt = crypt;
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
                const data = {};
                let dateTime = new Date().toISOString();
                data.lastActionTime = dateTime;
                data.lastActionTimeCrypt = cryptLastActionTime(auth.state.token + dateTime);
                commit(types.VX_CONTINUE_TOKEN, data);
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
            state.lastActionTime = data.lastActionTime;
            state.lastActionTimeCrypt = data.lastActionTimeCrypt;
        },
        [types.VX_CONTINUE_TOKEN]: (state, data) => {
            state.lastActionTime = data.lastActionTime;
            state.lastActionTimeCrypt = data.lastActionTimeCrypt;
        },
        [types.VX_SIGN_OUT]: state => {
            state.username = '';
            state.token = '';
            state.lastActionTime = '';
        }
    }
};

export default auth;
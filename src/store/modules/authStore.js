import types from '../types';
import {signin, getMenuList, signOut} from '@/api/authApi';
import {cryptLastActionTime} from '@/utils';

const auth = {
    state: {
        username: '',
        token: '',
        avatar: '',
        lastActionTime: '',
        lastActionTimeCrypt:'',

    },
    actions: {
        [types.VX_SIGN_IN]: ({commit}, userInfo) => {
            const username = userInfo.username.trim();
            const password = userInfo.password;
            const dateTime = new Date().toISOString();

            return new Promise((resolve, reject) => {
                signin(username, password).then(res => {
                    console.log('res.data===============', res.data);
                    const data = res.data;
                    data.lastActionTime = dateTime;
                    const crypt = cryptLastActionTime(data.token + dateTime);
                    data.lastActionTimeCrypt = crypt;
                    data.avatar = data.avatar  + '?imageView2/1/w/80/h/80';
                    commit(types.VX_SIGN_IN, data);
                    // commit(types.VX_GET_MENU, data.menuList);
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.VX_CONTINUE_TOKEN]: ({commit,state}) => {
            return new Promise(resolve => {
                const data = {};
                let dateTime = new Date().toISOString();
                data.lastActionTime = dateTime;
                data.lastActionTimeCrypt = cryptLastActionTime(state.token + dateTime);
                commit(types.VX_CONTINUE_TOKEN, data);
                resolve();
            });
        },
        [types.VX_SIGN_OUT]: ({commit, state}) => {
            return new Promise((resolve, reject) => {
                console.log('VX_SIGN_OUT', state.token);
                signOut(state.token).then(res => {
                    console.log('VX_SIGN_OUT signOut res', res);
                    commit(types.VX_SIGN_OUT);
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        }
    },
    mutations: {
        [types.VX_SIGN_IN]: (state, data) => {
            state.username = data.username;
            state.token = data.token;
            state.avatar = data.avatar;
            state.lastActionTime = data.lastActionTime;
            state.lastActionTimeCrypt = data.lastActionTimeCrypt;
        },
        [types.VX_CONTINUE_TOKEN]: (state, data) => {
            state.lastActionTime = data.lastActionTime;
            state.lastActionTimeCrypt = data.lastActionTimeCrypt;
        },
        [types.VX_SIGN_OUT]: state => {
            console.log('VX_SIGN_OUT mutation');
            state.username = '';
            state.token = '';
            state.avatar = '';
            state.lastActionTime = '';
        }
    }
};

export default auth;
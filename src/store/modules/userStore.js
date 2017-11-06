import types from '../types';
// import {signin, verifyToken} from '../../api/userApi';
// import {getToken, setToken, removeToken} from '../../utils/auth';

const user = {
    state: {
        phone: '',
        pswd: '',
        isSignIn: false,
        token: '',
    },

    actions: {
        [types.ST_USER_SIGN_IN]: ({commit}, paramUser) => {

            console.log('=== user action ===', paramUser);

            return new Promise((resolve, reject) => {
                // 验证用户
                // signin(paramUser).then(res => {
                //     console.log('===user action then===', res);
                //
                //     let retUser = res.data;
                //
                //     if(retUser) { // 验证通过
                //         console.log('===if===', retUser, retUser.token);
                //         // cookie 添加 token
                //         setToken(retUser.token);
                //
                //         commit(types.ST_USER_SIGN_IN, retUser);
                //     }
                //
                //     resolve(res);
                // }).catch(err => {
                //     console.log('===user action catch===', err);
                //     // reject(err);
                //     resolve({});
                // });
            });


            // commit(types.ST_USER_SIGN_IN, paramUser);
        },
        [types.ST_USER_VERIFY_TOKEN]: ({commit}, paramToken) => {
            console.log('=userStore action ST_USER_VERIFY_TOKEN=', 'paramToken=', paramToken);
            return new Promise((resolve, reject) => {
                console.log('=userStore action ST_USER_VERIFY_TOKEN promise= ', 'paramToken=', paramToken);
                // verifyToken(paramToken).then(res => {
                //     let retUser = res.data;
                //
                //     console.log('=userStore action ST_USER_VERIFY_TOKEN then= ', 'retUser=', retUser);
                //     if(retUser) {
                //         // cookie 添加 token
                //         setToken(retUser.token);
                //
                //         commit(types.ST_USER_SIGN_IN, retUser);
                //     } else {
                //         // 如果 token 失效，删除 token
                //         console.log('=userStore action ST_USER_VERIFY_TOKEN=  token 失效');
                //         removeToken();
                //     }
                //
                //     resolve(res);
                //
                // }).catch(err => {
                //     console.log('=userStore action ST_USER_VERIFY_TOKEN=', err);
                //     resolve({});
                // });
            });
        },
    },

    mutations: {
        [types.ST_USER_SIGN_IN]: (state, param) => {
            state.phone = param.phone;
            state.isSignIn = true;
            state.token = param.token;

            console.log("=userStore mutations state=", state);
        },
    },
};

export default user;
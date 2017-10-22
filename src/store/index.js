import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

import types from './types';
import auth from './modules/authStore';
import menu from './modules/menuStore';
import app from './modules/appStore';
import user from './modules/userStore';
import calculate from './modules/calculateStore';

Vue.use(Vuex);

import {getters} from './getters';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'system-name', // 存储到 storage 时所用的 key
    reducer: state => ({
        auth: state.auth,
        app: state.app
    }),
    filter: (mutation) => ( // 只要 filter 中的 mutation 被触发，所有 reduce 中的 state 都将被存储
        // // auth
        mutation.type === types.VX_SIGN_IN ||
        mutation.type === types.VX_CONTINUE_TOKEN ||
        mutation.type === types.VX_SIGN_OUT ||
        // // app
        mutation.type === types.VX_SIDERBAR_TOGGLE
    )
});

function m(mutation) {
    console.log(mutation);
    return false;
}

const store = new Vuex.Store({
    modules: {
        auth,
        menu,
        app,
        user,
        calculate
    },
    getters,
    plugins: [vuexLocal.plugin]
});

export default store;
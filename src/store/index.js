import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

import types from './types';
import auth from './modules/authStore';
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
    filter: (mutation) => (
        // auth
        mutation.type === types.VX_CONTINUE_TOKEN ||
        mutation.type === types.VX_SIGN_IN ||
        mutation.type === types.VX_USER_MENU ||
        // app
        mutation.type === types.VX_SIDERBAR_TOGGLE
    )
});

const store = new Vuex.Store({
    modules: {
        auth,
        app,
        user,
        calculate
    },
    getters,
    plugins: [vuexLocal.plugin]
});

export default store;
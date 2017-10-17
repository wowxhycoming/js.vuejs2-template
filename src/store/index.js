import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/authStore';
import sidebar from './modules/sidebarStore';
import user from './modules/userStore';
import calculate from './modules/calculateStore';

Vue.use(Vuex);

import {getters} from './getters';

const store = new Vuex.Store({
    modules: {
        auth,
        sidebar,
        user,
        calculate
    },
    getters
});

export default store;
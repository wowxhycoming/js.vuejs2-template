import types from '../types';

const sidebar = {
    state: {
        isOpened: true
    },
    actions: {
        [types.VX_SIDERBAR_TOGGLE]: ({commit}) => {
            commit(types.VX_SIDERBAR_TOGGLE);
        }
    },
    mutations: {
        [types.VX_SIDERBAR_TOGGLE]: (state) => {
            state.isOpened = !state.isOpened;
        }
    }
};

export default sidebar;
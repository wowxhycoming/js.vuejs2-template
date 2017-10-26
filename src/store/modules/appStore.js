import types from '../types';

const sidebar = {
    state: {
        isOpened: true,
        visitedViews: []
    },
    actions: {
        [types.VX_SIDERBAR_TOGGLE]: ({commit}) => {
            commit(types.VX_SIDERBAR_TOGGLE);
        },
        [types.VX_ADD_VISITED_VIEW]: ({commit}, view) => {
            console.log('VX_ADD_VISITED_VIEW view', view);
            commit(types.VX_ADD_VISITED_VIEW, view);
        },
        [types.VX_DEL_VISITED_VIEW]: ({commit, state}, view) => {
            return new Promise((resolve) => {
                commit('DEL_VISITED_VIEWS', view)
                resolve([...state.visitedViews])
            })
        }
    },
    mutations: {
        [types.VX_SIDERBAR_TOGGLE]: (state) => {
            state.isOpened = !state.isOpened;
        },
        [types.VX_ADD_VISITED_VIEW]: (state, view) => {
            console.log('VX_ADD_VISITED_VIEW in ');
            if (state.visitedViews.some(v => v.path === view.path)) return
            state.visitedViews.push({ name: view.name, path: view.path })
        },
        [types.VX_DEL_VISITED_VIEW]: (state, view) => {
            let index
            for(const [i, v] of state.visitedViews.entries()) {
                if(v.path === view.path) {
                    index = i
                    break
                }
            }
            state.visitedViews.splice(index, 1)
        }
    }
};

export default sidebar;
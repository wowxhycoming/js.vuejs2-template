import types from '../types';

const calculate = {
    state: {
        projectNo:''
    },

    actions:{
        [types.ST_CALC_IN_STORE]: ({commit}, projectNo) => {

            console.log('=== calculate action projectNo ===', projectNo);

            return new Promise((resolve, reject) => {
                commit(types.ST_CALC_IN_STORE, projectNo);
                resolve(projectNo);
            });

        }
    },

    mutations:{
        [types.ST_CALC_IN_STORE]: (state, projectNo) => {
            state.projectNo = projectNo;
            console.log("=calculate mutations state=", state);
        }
    }
}

export default calculate;
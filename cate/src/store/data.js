//创建store

import { createStore } from 'redux';
import methods from './methods'
import states from './states'


//初始化state
let stateInit = states;

//初始化函数
let ActionFnObj = methods;

function reducer(state = stateInit, action) {
    if (action.type.indexOf('redux') === -1) {
        state = ActionFnObj[action.type](state, action)
        return { ...state }
    } else {
        return state;
    }


}

const store = createStore(reducer)


export default store;
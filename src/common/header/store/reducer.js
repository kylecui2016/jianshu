import * as constants from './constants'
import { fromJS } from 'immutable'

// fromJS使state.header成为immutable对象
const defaultState = fromJS({
    focus: false,
    list: []
})

export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focus', true)
    }
    if(action.type === constants.SEARCH_BLUR) {
        return state.set('focus', false)
    }
    if(action.type === constants.TRENDING_SEARCH) {
        // list为immutable对象，action.data不能为普通对象，所以要讲action.data的来源设置为immutable对象??
        return state.set('list', action.data) 
    }
    return state
}
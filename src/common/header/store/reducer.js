import * as constants from './constants'
import { fromJS } from 'immutable'

// fromJS使state.header成为immutable对象
const defaultState = fromJS({
    focus: false,
    list: [],
    mouseIn: false,
    page: 0,
    totalPage: 0
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
            return state.set('focus', true)
        case constants.SEARCH_BLUR:
            return state.set('focus', false)
        case constants.TRENDING_SEARCH:
            // list为immutable对象，action.data不能为普通对象，所以要讲action.data的来源设置为immutable对象??
            // return state.set('list', action.data).set('totalPage', action.total)
            return state.merge({
                'list': action.data,
                'totalPage': action.total
            })
        case constants.MOUSE_IN:
            return state.set('mouseIn', true)
        case constants.MOUSE_OUT:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            const page = action.page
            const totalPage = action.totalPage
            if(page === totalPage - 1) {
                return state.set('page', 0)
            }
            return state.set('page', page + 1)
        default:
            return state
    }
}
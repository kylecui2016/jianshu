import * as constants from './constants'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    writerList: [],
    page: 1,
    showScroll: false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.INIT_HOME_DATA:
            return state.merge({
                articleList: action.data.get('articleList'),
                recommendList: action.data.get('recommendList'),
                writerList: action.data.get('writerList')
            })
        case constants.GET_MORE:
            return state.merge({
                articleList: state.get('articleList').concat(action.data),
                page: action.page + 1
            })
        case constants.TOGGLE_SCROLL:
            return state.set('showScroll', action.show)
        default: 
            return state
    }
}
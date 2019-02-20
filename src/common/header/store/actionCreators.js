import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const getTrendingSearchAction = (data,total) => ({
    type: constants.TRENDING_SEARCH,
    data: fromJS(data), // 是否需要fromJS存疑？
    total: fromJS(total)
})

export const getSearchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const getSearchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const getMouseIn = () => ({
    type: constants.MOUSE_IN
})

export const getMouseOut = () => ({
    type: constants.MOUSE_OUT
})

export const getChangePage = (page, totalPage) => ({
    type: constants.CHANGE_PAGE,
    page,
    totalPage
})

export const getTrendingSearch = () => {
    return (dispatch) => {
        axios.get('/api/trending_search.json').then((res) => {
            const data = res.data
            dispatch(getTrendingSearchAction(data.data, Math.ceil(data.data.length / 10)))
        }).catch((err) => {
            console.log(err)
        })
    }
}
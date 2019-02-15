import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const getTrendingSearchAction = (data) => ({
    type: constants.TRENDING_SEARCH,
    data: fromJS(data) // 是否需要fromJS存疑？
})

export const getSearchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const getSearchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const getTrendingSearch = () => {
    return (dispatch) => {
        axios.get('/api/trending_search.json').then((res) => {
            const data = res.data
            dispatch(getTrendingSearchAction(data.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
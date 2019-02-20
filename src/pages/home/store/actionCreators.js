import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const initHomeData = (data) => ({
    type: constants.INIT_HOME_DATA,
    data: fromJS(data)
})

const getMore = (data, page) => ({
    type: constants.GET_MORE,
    data: fromJS(data),
    page
})

export const toggleScroll = (show) => ({
    type: constants.TOGGLE_SCROLL,
    show
})

export const getHomeData = () =>{
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const data = res.data.data
            dispatch(initHomeData(data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const getMoreData = (page) =>{
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const data = res.data.data
            dispatch(getMore(data, page))
        }).catch((err) => {
            console.log(err)
        })
    }
}
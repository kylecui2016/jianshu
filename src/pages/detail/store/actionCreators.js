import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const detailData = (data) => ({
    type: constants.DETAIL_DATA,
    data: fromJS(data)
})

export const getDetailAction = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail.json?id=${id}`).then((res) => {
            const data = res.data.data
            dispatch(detailData(data))
        })
    }
}
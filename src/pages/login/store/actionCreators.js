import axios from 'axios'
import * as constants from './constants'

export const changeLogin = (value) => ({
    type: constants.CHANGE_LOGIN,
    value
})

export const loginAction = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
            const isLogin = res.data.data.isLogin
            dispatch(changeLogin(isLogin))
        }).catch((err) => {
            console.log(err)
        })
    }
}
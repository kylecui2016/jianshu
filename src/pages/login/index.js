import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends PureComponent {
    render() {
        const { isLogin, handleLogin } = this.props
        return (
            !isLogin ?
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={(input) => {this.account = input}} />
                    <Input placeholder='密码' type='password' ref={(input) => {this.password = input}} />
                    <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
                </LoginBox>
            </LoginWrapper>
            :
            <Redirect to='/'></Redirect>
        )
    }
}

const mapState = (state) => ({
    isLogin: state.getIn(['login', 'isLogin'])
})

const mapActions = (dispatch) => ({
    handleLogin(accountElem, passwordElem) {
        const account = accountElem.value
        const password = passwordElem.value
        dispatch(actionCreators.loginAction(account, password))
    }
})

export default connect(mapState, mapActions)(Login)
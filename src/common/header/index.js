import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    HeaderContent,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends Component {

    render() {
        const { focus, handleInputFocus, handleInputBlur } = this.props
        return (
            <HeaderWrapper>
                <HeaderContent>
                <Logo></Logo>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right login">登录</NavItem>
                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <NavSearchWrapper>
                            <CSSTransition
                                in={focus}
                                timeout={500}
                                classNames="search-slide"
                            >
                                <NavSearch
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    className={focus ? 'focus' : ''}
                                >
                                </NavSearch>
                            </CSSTransition>
                            <i className={focus ? 'iconfont focus' : 'iconfont'}>&#xe6e4;</i>
                            { this.getSearchInfo() }
                        </NavSearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderContent>
            </HeaderWrapper>
        )
    }
    
    getSearchInfo() {
        const { focus, list } = this.props
        if(focus) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item) => {
                                return (
                                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                )
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focus: state.getIn(['header', 'focus']),// 等同于state.get('header').get('focus')
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getTrendingSearch())
            dispatch(actionCreators.getSearchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.getSearchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
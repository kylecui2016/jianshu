import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { actionCreators } from './store';
import { actionCreators as LoginActionCreators} from '../../pages/login/store';
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

class Header extends PureComponent {

    render() {
        const { focus, list, handleInputFocus, handleInputBlur, isLogin, handleLogout } = this.props
        return (
            <HeaderWrapper>
                <HeaderContent>
                    <Link to='/'>
                        <Logo></Logo>
                    </Link>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        {
                            !isLogin ? 
                            <Link to='/login'>
                                <NavItem className="right login">登录</NavItem>
                            </Link> 
                            : 
                            <NavItem className="right logout" onClick={handleLogout}>退出</NavItem>
                        }
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
                                    onFocus={() => {handleInputFocus(list)}}
                                    onBlur={handleInputBlur}
                                    className={focus ? 'focus' : ''}
                                >
                                </NavSearch>
                            </CSSTransition>
                            <i className={focus ? 'iconfont focus zoom' : 'iconfont zoom'}>&#xe6e4;</i>
                            { this.getSearchInfo() }
                        </NavSearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to={isLogin?'/writting':'/login'}>
                            <Button className="writting">
                                <i className="iconfont">&#xe615;</i>
                                写文章
                            </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderContent>
            </HeaderWrapper>
        )
    }
    
    getSearchInfo() {
        const { focus, page, totalPage, list, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const searchList = []
        const newList = list.toJS() // 将immutable对象转为普通js对象
        if(newList.length) {
            for (let i = page * 10;(i < (page + 1) * 10)&&(i < newList.length); i ++) {
                searchList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if(focus || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {searchList}
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
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        isLogin: state.getIn(['login', 'isLogin'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            list.size === 0 && dispatch(actionCreators.getTrendingSearch())
            dispatch(actionCreators.getSearchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.getSearchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.getMouseIn())
        },
        handleMouseLeave() {
            dispatch(actionCreators.getMouseOut())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle) {
                originAngle = parseInt(originAngle, 10)
            }else {
                originAngle = 0
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)'
            dispatch(actionCreators.getChangePage(page, totalPage))
        },
        handleLogout() {
            dispatch(LoginActionCreators.changeLogin(false))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React, { PureComponent } from 'react'
// import Topic from './components/Topic.js'
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import Writer from './components/Writer.js'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    LoadMore,
    BackToTop
} from './style'

class Home extends PureComponent {
    handleBackTop() {
        window.scrollTo(0, 0)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.onScroll)
    }

    render() {
        const { loadMore, page, showScroll } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='banner' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4612/1e4eeb1b277034cca932f5e60e46d14b0629073b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    {/* <Topic /> */}
                    <List />
                    <LoadMore onClick={() => {loadMore(page)}}>阅读更多</LoadMore>
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showScroll ? (<BackToTop onClick={() => this.handleBackTop()}>回到顶部</BackToTop>) : null
                }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.init()
        this.bindEvents()
    }
}

const mapState = (state) => {
    return {
        page: state.getIn(['home', 'page']),
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapActions = (dispatch) => {
    return {
        init() {
            dispatch(actionCreators.getHomeData())
        },
        loadMore(page) {
            dispatch(actionCreators.getMoreData(page))
        },
        onScroll() {
            if(document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleScroll(true))
            }else {
                dispatch(actionCreators.toggleScroll(false))
            }
        }
    }
}

export default connect(mapState, mapActions)(Home)
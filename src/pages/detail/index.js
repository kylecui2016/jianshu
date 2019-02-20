import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom' // 解决用react-loadable异步加载组件后，引起的路由传参报错问题
import {
    DetailWrapper,
    DetailTitle,
    DetailContent
} from './style'

class Detail extends PureComponent {
    render() {
        const { title, content } = this.props
        return (
            <div>
                <DetailWrapper>
                    <DetailTitle>{title}</DetailTitle>
                    <DetailContent dangerouslySetInnerHTML={{__html: content}}>
                        
                    </DetailContent>
                </DetailWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapActions = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetailAction(id))
    }
})

export default connect(mapState, mapActions)(withRouter(Detail))
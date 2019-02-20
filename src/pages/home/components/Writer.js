import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    WriterWrapper, 
    WriterTitle,
    WriterItem,
    WriterContent,
    WriterFollow
} from '../style'

class Writer extends Component {
    render() {
        const { list } = this.props
        return (
            <div>
                <WriterWrapper>
                    <WriterTitle>
                        <span className='rec-title'>推荐作者</span>
                        <span className='rec-switch'>
                            <i className='iconfont spin'>&#xe851;</i>
                            换一批
                        </span>
                    </WriterTitle>
                    {
                        list.map((item) => {
                            return (
                                <WriterItem key={item.get('id')}>
                                    <img className='avatar' alt='' src={item.get('avatar_source')} />
                                    <WriterContent>
                                        <p className='nickname'>{item.get('nickname')}</p>
                                        <p className='writer-info'>写了{this.transNum(item.get('total_wordage'))}字 · {this.transNum(item.get('total_likes_count'))}喜欢</p>
                                    </WriterContent>
                                    <WriterFollow>
                                        +关注
                                    </WriterFollow>
                                </WriterItem>
                            )
                        })
                    }
                </WriterWrapper>
            </div>
        )
    }

    transNum(num) {
        return num > 1000 ? `${parseInt(num / 1000 * 10)/10}k` : num
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'writerList'])
    }
}

export default connect(mapState, null)(Writer)
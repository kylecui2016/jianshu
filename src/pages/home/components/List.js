import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
    ListWrapper,
    ListItem,
    ListInfo
} from '../style'

class List extends Component {
    render() {
        return (
            <div>
                <ListWrapper>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <Link className='item' to={`/detail/${item.get('id')}`} key={index}>
                                    <ListItem>
                                        <ListInfo>
                                            <p className='title'>{item.get('title')}</p>
                                            <p className='desc'>{item.get('desc')}</p>
                                        </ListInfo>
                                        <img className='list-pic' alt='' src={item.get('imgUrl')} />
                                    </ListItem>
                                </Link>
                            )
                        })
                    }
                </ListWrapper>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'articleList'])
    }
}

export default connect(mapState, null)(List)
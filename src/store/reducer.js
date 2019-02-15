import { combineReducers } from 'redux-immutable' //使得state变为immutable类型的对象
import { reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
    header: headerReducer
})

export default reducer
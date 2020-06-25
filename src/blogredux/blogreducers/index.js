import {combineReducers} from 'redux'
import postReducer from './postReducer'
import userreducer from './userreducer'
export default combineReducers({
    posts:postReducer,
    user:userreducer
})
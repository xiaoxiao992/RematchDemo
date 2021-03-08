import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


// 多个reducer何必成一个
export default combineReducers({
    todos,
    visibilityFilter
})
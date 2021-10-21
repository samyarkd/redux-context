import loged from './islogged'
import counter from './counter'
import listReducer from './list'
import { combineReducers } from 'redux'
import requeReduser from './requ'
const rootReducer = combineReducers({
    isLoggedIn: loged,
    counter,
    listReducer,
    requeReduser
})


export default rootReducer
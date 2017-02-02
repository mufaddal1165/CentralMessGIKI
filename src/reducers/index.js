import {combineReducers} from 'redux'
import {centralMess} from './reducer-funcs.js'

const allReducers = combineReducers({
    centralMess:centralMess
}
)

export default allReducers

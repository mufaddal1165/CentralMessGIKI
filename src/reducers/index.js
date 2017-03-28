import { combineReducers } from 'redux'
// import { centralMess, fetchData } from './reducer-funcs.js'
import Immutable, { Map, List } from 'immutable'
import { REQUEST_FOOD_ITEMS, RECEIVE_FOOD_ITEMS, REQUEST_SUPPLIERS, RECEIVE_SUPPLIERS, ADDTO_PURCHASE_ITEM, REQUEST_PURCHASE_ORDER, RECEIVE_PURCHASE_ORDER, ADD_DRAWING, COMMIT_DRAWING, DEL_DRAWING, DEL_DEMAND, ADD_DEMAND, COMMIT_DEMAND, SUCCESS_DRAWINGS } from '../constants/ActionTypes.js'

const centralMess = (state = Map({
    invalidated: true,
    isFetching: false,
    foodItems: List(),

}), action) => {

    switch (action.type) {
        case REQUEST_FOOD_ITEMS:
            return state.set('isFetching', true)
        case RECEIVE_FOOD_ITEMS:
            let updatedList = List(action.items)
            return state.merge({ foodItems: updatedList, isFetching: false, invalidated: false })
        case SUCCESS_DRAWINGS:
            return state.set(invalidated, true)
        default:
            return state;
    }

}

const suppliers = (state = Map({
    isFetching: false,
    suppliers: List()
}),
    action) => {
    switch (action.type) {
        case REQUEST_SUPPLIERS:
            return state.set('isFetching', true)
        case RECEIVE_SUPPLIERS:
            let updatedList = List(action.items)
            return state.merge({ suppliers: updatedList, isFetching: false })
        default:
            return state
    }
}

const purchaseItem = (state = Map({
    invalidated: true,
    isFetching: false,
    paramsToPurOrder: List(),
    purchaseOrder: List()
}), action) => {
    switch (action.type) {
        case ADDTO_PURCHASE_ITEM:
            let purItems = state.get('paramsToPurOrder').push(action.item)
            return state.merge({ paramsToPurOrder: purItems })
        case REQUEST_PURCHASE_ORDER:
            return state.set('isFetching', true)
        case RECEIVE_PURCHASE_ORDER:
            return state.merge({ purchaseOrder: List(action.items), isFetching: false, invalidated: false })
        default:
            return state
    }
}
const drawings = (state = Map({
    drawnOut: List()
}), action) => {
    switch (action.type) {
        case ADD_DRAWING:
            var drawings = state.get('drawnOut').push(action.item)
            return state.merge({ drawnOut: drawings })
        case DEL_DRAWING:
            var drawings = state.get('drawnOut').delete(action.index)
            return state.merge({ drawnOut: drawings })
        default:
            return state;
    }
}
const demands = (state = Map({
    demands: List()
}), action) => {
    switch (action.type) {
        case ADD_DEMAND:
            var demands = state.get('demands').push(action.item)
            return state.merge({ demands: demands })
        case DEL_DEMAND:
            var demands = state.get('demands').delete(action.index)
            return state.merge({ demands: demands })
        default:
            return state
    }
}
const allReducers = combineReducers({
    centralMess,
    suppliers,
    purchaseItem,
    drawings,
    demands
}
)




export default allReducers

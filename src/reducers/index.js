import { combineReducers } from 'redux'
// import { centralMess, fetchData } from './reducer-funcs.js'
import Immutable, { Map, List } from 'immutable'
import { REQUEST_FOOD_ITEMS, RECEIVE_FOOD_ITEMS, REQUEST_SUPPLIERS, RECEIVE_SUPPLIERS, ADDTO_PURCHASE_ITEM } from '../constants/ActionTypes.js'

const centralMess = (state = Map({
    isFetching: false,
    foodItems: List(),
    demandedToday: List(),
    tmpDemandedToday: List(),
    studentCount: 0,
    drawnOutToday: List(),
    tmpDrawnToday: List(),
    tmpStockAdded: List(),
    stockAdded: List(),
    lowStock: List(),
    upComingDeliveries: List(),
    foodSummary: List()

}), action) => {

    switch (action.type) {
        case REQUEST_FOOD_ITEMS:
            return state.set('isFetching', true)
        case RECEIVE_FOOD_ITEMS:
            let updatedList = List(action.items)
            return state.merge({ foodItems: updatedList, isFetching: false })

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
    paramsToPurOrder: List()
}), action) => {
    switch (action.type) {
        case ADDTO_PURCHASE_ITEM:
            let purItems = state.get('paramsToPurOrder').push(action.item)
            return state.merge({ paramsToPurOrder: purItems })
        default:
            return state
    }
}

const allReducers = combineReducers({
    centralMess,
    suppliers,
    purchaseItem
}
)




export default allReducers

import * as types from '../constants/ActionTypes.js'
import fetch from 'isomorphic-fetch'

export const addDemand = (item) => ({ type: types.ADD_DEMAND, item })
export const deleteDemand = (index) => ({ type: types.DEL_DEMAND, index })

export const addDrawing = (item) => ({ type: types.ADD_DRAWING, item })
export const commitDrawings = () => ({ type: types.COMMIT_DRAWING })
export const deleteDrawing = (index) => ({ type: types.DEL_DRAWING, index })

export const receiveFoodItems = (items) => ({ type: types.RECEIVE_FOOD_ITEMS, items })
export const requestFoodItems = () => ({ type: types.REQUEST_FOOD_ITEMS })

export const requestSuppliers = () => ({ type: types.REQUEST_SUPPLIERS })
export const receiveSuppliers = (items) => ({ type: types.RECEIVE_SUPPLIERS, items })

export const requestPurchaseOrder = () => ({ type: types.REQUEST_PURCHASE_ORDER })
export const receivePurchaseOrder = (items) => ({ type: types.RECEIVE_PURCHASE_ORDER, items })


export const addToPrItem = item => ({ type: types.ADDTO_PURCHASE_ITEM, item })
//data
export const fetchFoodItems = () => (dispatch, getState) => {
    const foodItems = getState().centralMess
    const invalidated = foodItems.get('invalidated')
    const isFetching = foodItems.get('isFetching')
    if (invalidated && !isFetching) {
        dispatch(requestFoodItems())
        fetch(`../../data/foodItems.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveFoodItems(json)))
    }
}
// https://tranquil-bastion-28756.herokuapp.com/api/foodItem
export const fetchSuppliers = () => dispatch => {
    dispatch(requestSuppliers())
    fetch(`../../data/suppliers.json`)
        .then(response => response.json())
        .then(json => dispatch(receiveSuppliers(json)))

}

export const fetchPurchaseOrders = () => dispatch => {
    dispatch(requestPurchaseOrder())
    fetch(`../../data/purchaseOrder.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePurchaseOrder(json)))
}

export const receiveError = (message) => ({ type: types.ERROR_RESPONSE, message })
export const receiveSuccessMsg = (message) => ({ type: types.RECEIVE_SUCCESS_MESSAGE })

export const commitDemands = () => (dispatch, getState) => {

}

import * as types from '../constants/ActionTypes.js'
import fetch from 'isomorphic-fetch'

export const getSelectedItem = itemName => ({ type: types.GET_SELECTED_ITEM })
export const setSelectedItem = itemName => ({ type: types.SET_SELECTED_ITEM, itemName })
//-Stock In
export const addTmpStock = item => ({ type: types.ADD_STOCK, item })
export const delTmpStock = index => ({ type: types.DELETE_TEMP_STOCK, index })
export const commitStockAdds = () => ({ type: types.COMMIT_STOCK_ADDS })
export const clearTempStock = () => ({ type: types.CLEAR_TEMP_STOCK })
//-Demands
export const clearTempDemand = () => ({ type: types.CLEAR_TEMP_DEMAND })
export const delTmpDemand = index => ({ type: types.DELETE_TEMP_DEMAND, index })
export const addTempDemand = item => ({ type: types.ADD_DEMAND, item })
export const commitStockDemand = () => ({ type: types.COMMIT_STOCK_DEMAND })
//-Drawings
export const clearTempDrawings = () => ({ type: types.CLEAR_TEMP_DRAWING })
export const delTmpDrawings = index => ({ type: types.DELETE_TEMP_DRAWING, index })
export const addTempDrawings = item => ({ type: types.ADD_DRAWING, item })
export const commitStockDrawings = () => ({ type: types.COMMIT_STOCK_DRAWING })

export const receiveFoodItems = (items) => ({ type: types.RECEIVE_FOOD_ITEMS, items })
export const requestFoodItems = () => ({ type: types.REQUEST_FOOD_ITEMS })

export const requestSuppliers = () => ({ type: types.REQUEST_SUPPLIERS })
export const receiveSuppliers = (items) => ({ type: types.RECEIVE_SUPPLIERS, items })

export const addToPrItem = item=>({type:types.ADDTO_PURCHASE_ITEM,item}) 
//data
export const fetchFoodItems = () => dispatch => {
    dispatch(requestFoodItems())
    fetch(`../../data/foodItems.json`)
        .then(response => response.json())
        .then(json => dispatch(receiveFoodItems(json)))

}

export const fetchSuppliers = () => dispatch => {
    dispatch(requestSuppliers())
    fetch(`../../data/suppliers.json`)
        .then(response => response.json())
        .then(json => dispatch(receiveSuppliers(json)))

}
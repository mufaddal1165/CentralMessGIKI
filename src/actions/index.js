import * as types from '../constants/ActionTypes.js'

export const getSelectedItem = itemName =>({type:types.GET_SELECTED_ITEM})
export const setSelectedItem = itemName=>({type:types.SET_SELECTED_ITEM,itemName})
export const addStockAdded = item =>({type:types.ADD_STOCK,item})

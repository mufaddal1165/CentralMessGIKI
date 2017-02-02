import * as types from '../constants/ActionTypes.js'

export const getSelectedItem = itemName =>({type:types.GET_SELECTED_ITEM})
export const setSelectedItem = itemName=>({type:types.SET_SELECTED_ITEM,itemName})
//-Stock In 
export const addTmpStock = item =>({type:types.ADD_STOCK,item})
export const delTmpStock = index =>({type:types.DELETE_TEMP_STOCK,index})
export const commitStockAdds = ()=>({type:types.COMMIT_STOCK_ADDS})
export const clearTempStock = ()=>({type:types.CLEAR_TEMP_STOCK})
//-Demands
export const clearTempDemand = ()=>({type:types.CLEAR_TEMP_DEMAND})
export const delTmpDemand = index =>({type:types.DELETE_TEMP_DEMAND,index})
export const addTempDemand = item =>({type:types.ADD_DEMAND,item})
export const commitStockDemand = ()=>({type:types.COMMIT_STOCK_DEMAND})

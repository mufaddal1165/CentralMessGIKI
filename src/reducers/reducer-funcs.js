import * as actionTypes from '../constants/ActionTypes.js'
import Immutable,{Map,List} from 'immutable'
import {initialStateObj,initialTrueObj} from './InitialStateObj.js'
import axios from 'axios'

const initialState = Map(initialStateObj)

export function centralMess(state = initialState ,action){
    switch(action.type){
        case actionTypes.ADD_STOCK:
          var tmpStock = state.get("tmpStockAdded").push(action.item);
          return state.merge({tmpStockAdded:tmpStock});
        case actionTypes.DELETE_TEMP_STOCK:
          var tmpStock = state.get('tmpStockAdded').delete(action.index);
          return state.merge({tmpStockAdded:tmpStock});
        case actionTypes.COMMIT_STOCK_ADDS:
          var tmpStock = state.get('tmpStockAdded');
          var stockAdded = state.get('stockAdded').concat(tmpStock)
          return state.merge({stockAdded:stockAdded})
        case actionTypes.CLEAR_TEMP_STOCK:
          var tmpStock = List()
          return state.merge({tmpStockAdded:tmpStock})
          //----------------------------------------------------
        case actionTypes.DELETE_TEMP_DEMAND:
          var tmpDemand = state.get('tmpDemandedToday').delete(action.index)
          return state.merge({tmpDemandedToday:tmpDemand})
        case actionTypes.CLEAR_TEMP_DEMAND:
          var tmpDemand = List()
          return state.merge({tmpDemandedToday:tmpDemand})
        case actionTypes.ADD_DEMAND:
          var tmpDemand = state.get('tmpDemandedToday').push(action.item)
          return state.merge({tmpDemandedToday:tmpDemand})
        case actionTypes.COMMIT_STOCK_DEMAND:
          var tmpDemand = state.get('tmpDemandedToday')
          var stockDemanded = state.get('demandedToday').concat(tmpDemand)
          return state.merge({demandedToday:stockDemanded})
          // -------------------------------------------------
        case actionTypes.DELETE_TEMP_DRAWING:
          var tmpDrawing = state.get('tmpDrawnToday').delete(action.index)
          return state.merge({tmpDrawnToday:tmpDrawing})
        case actionTypes.CLEAR_TEMP_DRAWING:
          var tmpDrawing = List()
          return state.merge({tmpDrawnToday:tmpDrawing})
        case actionTypes.ADD_DRAWING:
          var tmpDrawing = state.get('tmpDrawnToday').push(action.item)
          return state.merge({tmpDrawnToday:tmpDrawing})
        case actionTypes.COMMIT_STOCK_DRAWING:
          var tmpDrawing = state.get('tmpDrawnToday')
          var stockDrawn = state.get('drawnOutToday').concat(tmpDrawing)
          return state.merge({drawnOutToday:stockDrawn})

        default:
            return state;
    }
}

import * as actionTypes from '../constants/ActionTypes.js'
import Immutable,{Map,List} from 'immutable'
const initialStateObj= {
    foodItems : [
        {
            FoodId:1,
            Name:"Chicken",
            Unit:'Kilos',
            Quantity: 100,
            MinReorderLimit:100
        },
        {
            FoodId:2,
            Name:"Mutton",
            Unit:'Kilos',
            Quantity: 150,
            MinReorderLimit:100
        },
        {
            FoodId:3,
            Name:"Eggs",
            Unit:'Dozens',
            Quantity: 40,
            MinReorderLimit:10
        },
        {
            FoodId:4,
            Name:"Onions",
            Unit:'Kilos',
            Quantity: 150,
            MinReorderLimit:50
        },
        {
            FoodId:5,
            Name:'Coca Cola',
            Unit:'Carets',
            Quantity: 100,
            MinReorderLimit:60
        },
        {
            FoodItem:6,
            Name:'Chilli Garlic Sauce',
            Unit:'Packets',
            Quantity: 10,
            MinReorderLimit:5
        }

    ],
    suppliers:[
      {
        SupplierId:1,
        Name:"Amjad Khan",
        ContactNo:"03312355886",
        Address:"Jehangira Road Swabi"
      },
      {
        SupplierId:2,
        Name:"Mumtaz Khan",
        ContactNo:"03313715491",
        Address:"Jehangira Road Swabi"
      }
    ],
    upComingDeliveries : [

    ],
    demandedToday :[

    ]
    ,
    studentCount : 0,
    drawnOutToday :[

    ],
    tmpStockAdded : List(),
    stockAdded : List()

}
const initialState = Map(initialStateObj)
export default function centralMess(state = initialState ,action){
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
        default:
            return state;
    }
}

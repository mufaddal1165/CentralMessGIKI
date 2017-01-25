import * as actionTypes from '../constants/ActionTypes.js'
import Immutable from 'immutable'
const initialState = {
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
    selectedItem : function(){ return this.foodItems[0]},
    upComingDeliveries : [

    ],
    demandedToday :[

    ]
    ,
    studentCount : 0,
    drawnOutToday :[

    ],
    stockAdded : [

    ]

}

export default function centralMess(state = initialState ,action){
    switch(action.type){

        case actionTypes.SET_SELECTED_ITEM:
            state.foodItems.map((item)=>{
                if(item.Name === action.itemName){
                    state = {
                        foodItems : state.foodItems,
                        selectedItem:()=>item
                    }
                }
            })

            return state;
        case actionTypes.ADD_STOCK:
            break;
        default:
            return state;
    }
}

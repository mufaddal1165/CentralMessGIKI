import Immutable,{Map,List} from 'immutable'

export const initialTrueObj = {
  foodItems:List(),
  suppliers:List(),
  demandedToday :List(),
  tmpDemandedToday:List(),
  studentCount : 0,
  drawnOutToday :List(),
  tmpDrawnToday:List(),
  tmpStockAdded : List(),
  stockAdded : List(),
  lowStock:List(),
  upComingDeliveries:List(),
  foodSummary:List()



}

export const initialStateObj= {
    foodItems : [
        {
            FoodId:1,
            Name:"Chicken",
            Unit:'Kilos',
            Quantity: 0,
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
        },{
            FoodId:7,
            Name:'Basmati',
            Unit:'Kilos',
            Quantity: 100,
            MinReorderLimit:60
        },{
            FoodId:8,
            Name:'Wheat',
            Unit:'Kilos',
            Quantity: 100,
            MinReorderLimit:60
        },

    ],
    suppliers:[{
  "SupplierId": 1,
  "Name": "Patrick Hanson",
  "Adress": "155 Haas Pass",
  "ContactNo": "43-(822)938-4845"
}, {
  "SupplierId": 2,
  "Name": "Irene Walker",
  "Adress": "0 Hagan Avenue",
  "ContactNo": "971-(325)965-1090"
}, {
  "SupplierId": 3,
  "Name": "Aaron Cox",
  "Adress": "9 Talisman Way",
  "ContactNo": "63-(175)640-5989"
}, {
  "SupplierId": 4,
  "Name": "Margaret Frazier",
  "Adress": "43 Bartelt Place",
  "ContactNo": "86-(583)515-4628"
}, {
  "SupplierId": 5,
  "Name": "Fred Schmidt",
  "Adress": "72393 Milwaukee Alley",
  "ContactNo": "62-(144)515-6103"
}, {
  "SupplierId": 6,
  "Name": "Jeffrey Stephens",
  "Adress": "1 Farmco Crossing",
  "ContactNo": "62-(799)127-8334"
}, {
  "SupplierId": 7,
  "Name": "Lori Shaw",
  "Adress": "2 Rieder Trail",
  "ContactNo": "46-(162)396-0515"
}, {
  "SupplierId": 8,
  "Name": "Brenda Boyd",
  "Adress": "36 Butternut Place",
  "ContactNo": "57-(193)749-2976"
}, {
  "SupplierId": 9,
  "Name": "Lawrence Cruz",
  "Adress": "58 Cambridge Pass",
  "ContactNo": "86-(883)353-5929"
}, {
  "SupplierId": 10,
  "Name": "Roy Owens",
  "Adress": "798 Lakewood Gardens Junction",
  "ContactNo": "48-(465)110-8199"
}, {
  "SupplierId": 11,
  "Name": "Lillian Jones",
  "Adress": "03 Sunfield Crossing",
  "ContactNo": "86-(912)274-5636"
}
    ],
    upComingDeliveries : List.of(
      {
        'Item':'Onions',
        'Quantity':'100',
        'Unit':'Kilos',
        'Date':'Today'
      },{
        'Item':'Coriander',
        'Quantity':'100',
        'Unit':'Kilos',
        'Date':'Today'
      },{
        'Item':'Peas',
        'Quantity':'50',
        'Unit':'Kilos',
        'Date':'Today'
      },{
        'Item':'Tomato',
        'Quantity':'100',
        'Unit':'Kilos',
        'Date':'Today'
      }
    ),
    demandedToday :List(),
    tmpDemandedToday:List(),
    studentCount : 0,
    drawnOutToday :List(),
    tmpDrawnToday:List(),
    tmpStockAdded : List(),
    stockAdded : List(),
    lowStock : List.of({
      'Item':'Chicken',
      'Quantity':'20',
      'Unit':'Kilos'
    },
    {
      'Item':'Potato',
      'Quantity':'20',
      'Unit':'Kilos'
    },
    {
      'Item':'Eggs',
      'Quantity':'20',
      'Unit':'Dozens'

    }
  ),
  foodSummary : List.of(
    {
      'FoodId':1,
      'Name':'Peas',
      'Quantity':30,
      'Min':50,
      'Unit':'Kilos',
      'Drawn':'2017-01-29',
      'Delivery':'2017-01-30'
  },{
      'FoodId':2,
      'Name':'Red Beans',
      'Quantity':30,
      'Min':20,
      'Unit':'Kilos',
      'Drawn':'2017-01-29',
      'Delivery':'2017-01-30'

    },{
      'FoodId':3,
      'Name':'Basmati',
      'Quantity':50,
      'Min':10,
      'Unit':'Kilos',
      'Drawn':'2017-01-29',
      'Delivery':'2017-01-30'

    },{
      'FoodId':4,
      'Name':'Wheat',
      'Quantity':70,
      'Min':300,
      'Unit':'Kilos',
      'Drawn':'2017-01-29',
      'Delivery':'2017-01-30'

    }


  )

}

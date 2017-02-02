import React from "react"
import {Router,Route,hashHistory} from "react-router"
import {Provider} from "react-redux"
import {createStore} from "redux"
import ReactDOM,{render} from "react-dom"
import App from "./container/App.jsx"
import Supplier from "./pages/Supplier.jsx"
import StockOut from "./pages/Stock Out.jsx"
import StockIn from "./pages/Stock In.jsx"
import PurchaseOrder from "./pages/PurchaseOrder.jsx"
import reducer from "./reducers/index.js"
import DemandItems from "./pages/DemandItems.jsx"
let store = createStore(reducer)

render(
  <Provider store={store}>
  <Router history = {hashHistory} >
    <Route path="/" component={App}/>
    <Router path="/StockOut"component={StockOut}/>
    <Router path="/StockIn"component={StockIn}/>
    <Router path="PurchaseOrder" component={PurchaseOrder}/>
    <Router path="DemandItems" component={DemandItems}/>
  </Router>
  </Provider>

,document.getElementById('app'));

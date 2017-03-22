import React from "react"
import { Router, Route, hashHistory, browserHistory } from "react-router"
import { Provider } from "react-redux"
import { createStore,applyMiddleware } from "redux"
import ReactDOM, { render } from "react-dom"
import App from "./container/App.jsx"
import Supplier from "./pages/Supplier.jsx"
import StockOut from "./pages/Stock Out.jsx"
import StockIn from "./pages/Stock In.jsx"
import PurchaseOrder from "./pages/PurchaseOrder.jsx"
import reducer from "./reducers/index.js"
import DemandItems from "./pages/DemandItems.jsx"
import FoodItemsPage from "./pages/FoodItemsPage.jsx"
import AddFoodItem from './pages/AddFoodItem.jsx'
import Settings from './pages/Settings.jsx'
import Login from './pages/Login.jsx'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'


const middleWare = [thunk]
middleWare.push(createLogger())

let store = createStore(
  reducer,
  applyMiddleware(...middleWare)
)

render(
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path="/Home" component={App} />
      <Router path="/StockOut" component={StockOut} />
      <Router path="/StockIn" component={StockIn} />
      <Router path="PurchaseOrder" component={PurchaseOrder} />
      <Router path="PurchaseOrder/:item" component={PurchaseOrder} />
      <Router path="DemandItems" component={DemandItems} />
      <Router path="FoodItems" component={FoodItemsPage} />
      <Router path='Settings' component={Settings} />
      <Router path='/' component={Login} />
    </Router>
  </Provider>

  , document.getElementById('app'));

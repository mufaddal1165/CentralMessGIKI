import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import Supplier from "./Supplier.jsx"
import StockOut from "./Stock Out.jsx"
import StockIn from "./Stock In.jsx"
import {Router,Route,hashHistory} from "react-router"
ReactDOM.render(
  <Router history = {hashHistory} >
    <Route path="/" component={App}/>
    <Router path="/StockOut"component={StockOut}/>
    <Router path="/StockIn"component={StockIn}/>
  </Router>

,document.getElementById('app'));

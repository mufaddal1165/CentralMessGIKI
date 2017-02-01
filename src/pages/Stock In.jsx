import React from "react"
import NavBar from "../components/NavSide.jsx"
import Header from "../components/Header.jsx"
import Box from "../components/Box.jsx"
import {Button, HelpBlock, ControlLabel, Row, Col, Table, CheckBox, Form, FormControl, FormGroup} from "react-bootstrap"
import FieldGroup from "../components/FieldGroup.jsx"
import Template from "../components/Template.jsx"
import {bindActionCreators} from "redux"
import {connect } from 'react-redux'
import * as Actions from '../actions'
import Summary from '../components/Summary.jsx'
import {Style} from 'radium'
import ItemsList from '../components/ItemsList.jsx'
import Immutable,{Map} from 'immutable'

class StockIn extends React.Component {

constructor(props){
    super(props)
    const data = this.props.data.toJS();
    this.state = {

        activeItem : data.foodItems[0],
        qtyEntered : 0,
        tmpSelListSerial : 0

    }
}
getFoodItems(){
    console.log(this.props.data.get('foodItems'))
    return (
        this.props.data.get('foodItems').map((item)=>{
          return <option key={item.Name}>{item.Name}</option>
        })
    )
}
setActiveItem(itemName){
    var _this = this;
    this.props.data.get('foodItems').map(item=>{
        if(item.Name === itemName  ){
            console.log(item.Name,item.Unit);
            _this.setState({
                activeItem : item
            });
        }
    })
}
delItemListRow(index){
  this.props.actions.delTmpStock(index);
}
addItemToList(){

  var item = this.state.activeItem;
  var qty = this.state.qty;
  var obj = {
    foodItem : item,
    qty : qty
  }
  this.props.actions.addTmpStock(obj);
}
onClickSubmit(){
  this.props.actions.commitStockAdds();
  this.props.actions.clearTempStock();
}
renderForm(){
    return (
                    <Form>

                            <Row className="headings">
                              <Col sm={5}><strong>Item</strong></Col>
                              <Col sm={5}><strong>{this.state.activeItem.Unit}</strong></Col>
                              <Col sm={2}></Col>
                            </Row>
                            <p></p>
                            <Style scopeSelector=".headings" rules={{textAlign:"center" }}></Style>
                            <Row>
                            <Col sm={5}>
                            <select className='form-control'  id="FoodItem"                         onChange={()=>this.setActiveItem(document.getElementById("FoodItem").value)}
                            >
                            {this.getFoodItems()}
                            </select>
                          </Col>
                          <Col sm={5}>
                            <input
                                className='form-control'
                                id="Qty"
                                onChange = {()=>{ var qty= document.getElementById("Qty").value; this.setState({qty:qty})}}
                                type="text"
                            >
                          </input>
                          </Col>
                          <Col sm={2}>
                            <Button onClick={()=>this.addItemToList()}>
                              Add
                            </Button>
                          </Col>
                            </Row>
                        </Form>
    )
}

    render() {
        const submit = (<Button onClick={()=>this.onClickSubmit()}>Submit</Button>)
        return (
            <div >
                <Template>
                    <Col sm={2}>
                    </Col>
                    <Col sm={4}>
                      <Row>
                        <h3>
                            Stock In
                        </h3>
                        {this.renderForm()}
                        </Row>
                        <hr/>

                        <Row>
                          {//this.state.tmpSelectedList
                            this.props.data.get('tmpStockAdded').map((item,i)=>{
                              console.log(i)
                              return <ItemsList itemName={item.foodItem.Name} qty={item.qty}  key={i} serial={i} unit={item.foodItem.Unit} crosshandle={this.delItemListRow.bind(this)}/>
                            })
                          }
                          <hr/>

                          {!this.props.data.get("tmpStockAdded").size||submit}
                        </Row>
                    </Col>
                    <Col sm={2}></Col>
                    <Col sm={4}>
                      <Summary List={this.props.data.get('stockAdded')} heading="Items Added"/>
                    </Col>
                </Template>
            </div>

        );
    }
}

const mapStateToProps = state=>({
    data : state.centralMess
})
const mapDispatchToProps = dispatch=>({
    actions : bindActionCreators(Actions,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(StockIn)

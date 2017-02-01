import React from "react"
import {Button, HelpBlock, ControlLabel, Row, Col, Table, CheckBox, Form, FormControl, FormGroup,OverlayTrigger,Tooltip} from "react-bootstrap"
import FieldGroup from "../components/FieldGroup.jsx"
import Template from "../components/Template.jsx"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as Actions from '../actions'
import PurchaseOrderItem from "../components/PurchaseOrderItem.jsx"
import Radium ,{Style,} from 'radium'
import Immutable,{List,Map} from 'immutable'

class PurchaseOrder extends React.Component {
  constructor(props) {
    super(props);


  }
  componentWillMount(){

    this.state={
      noOfrows:0,
      rowObjList:Map.of(0,<PurchaseOrderItem suppliers={this.props.data.suppliers} foodItems={this.props.data.foodItems} actions={this.props.actions} serial={0} crosshandle={this.delRow.bind(this)}/>)
    }
    console.log(this.state.rowObjList)
  }
  populateItemList(){
    return this.props.data.foodItems.map((item)=>{
      return <option key={item.Name+item.FoodId}>{item.Name}</option>
    })
  }
  populateSupplierList(){
    return this.props.data.suppliers.map((supplier)=>{
      return <option key={supplier.Name+supplier.SupplierID}>{supplier.Name}</option>

    })
  }
  addRow(){
  var  rows = this.state.rowObjList.merge(Map.of(this.state.noOfrows+1,<PurchaseOrderItem suppliers={this.props.data.suppliers} foodItems={this.props.data.foodItems} actions={this.props.actions} serial={this.state.noOfrows+1} crosshandle={this.delRow.bind(this)}/>));
    var rowCount = this.state.noOfrows+1;
    this.setState(
      {
        rowObjList:rows,
        noOfrows:rowCount
      }
    )

  }
  delRow(index){
    var rows = this.state.rowObjList.delete(index)
    this.setState({
      rowObjList:rows,
      // noOfrows:rowCount
    })
  }

  render() {
      const tooltip_add = (<Tooltip id='tooltip_add'>To add more items for purchase order</Tooltip>)
      const tooltip_submit = (<Tooltip id='tooltip_submit'> Saves the purchase order</Tooltip>)
      const headings =(
        <div>
        <Style scopeSelector={headings}
          rules={{

            ".headings":{
              textAlign:"center",
              fontWeight:"bold"
            }

          }}

          >
        </Style>
        <div className = "headings">
        <Row>
          <Col sm={3}>Item</Col>
          <Col sm={3}>Supplier</Col>
          <Col sm={1}>Qty</Col>
          <Col sm={1}>Unit</Col>
          <Col sm={1}>Rate</Col>
          <Col sm={2}>Expected Date</Col>
        </Row>
        </div>
        </div>
      )
      return (<div>

      <Template>
        <Col sm={1}>
        </Col>
        <Col sm={10}>
          <h3>Create Purchase Order</h3>
          {headings}
          <hr/>
          {this.state.rowObjList}
          <hr/>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
            <Col sm={3}>
              <OverlayTrigger placement='bottom' overlay={tooltip_add}>
              <Button onClick={()=>this.addRow()}>
                Add Item
              </Button>
              </OverlayTrigger>
            </Col>
            <Col sm={3}>
              <OverlayTrigger placement='bottom' overlay={tooltip_submit}>
              <Button onClick={()=>{}}>
              Submit
              </Button>
              </OverlayTrigger>
            </Col>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Col>

        <Col sm={1}>
        </Col>
      </Template>
    </div>);
  }
}
const mapStateToProps = state=>({
    data : state.centralMess
})
const mapDispatchToProps = dispatch=>({
    actions : bindActionCreators(Actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(PurchaseOrder)

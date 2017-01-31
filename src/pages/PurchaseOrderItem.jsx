import React, {PropTypes} from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap'
import Radium,{Style} from 'radium'
export default class PurchaseOrderItem extends React.Component {
  constructor(props) {

    super(props);
    const foodItems = this.props.foodItems;
    const suppliers = this.props.suppliers;
    this.state = {
        activeItem : foodItems[0],
        hover:true,
        qty:0,
        rate:0,
        activeSupplier:suppliers[0]
    }
  }
  componentDidMount(){
    // document.getElementById('FoodItem'+this.props.serial).value = this.state.activeItem.Name;
    // document.getElementById('Supplier'+this.props.serial).value = this.state.activeSupplier.Name;
    // document.getElementById('qty'+this.props.serial).value = this.state.qty;
    // document.getElementById('rate'+this.props.serial).value = this.state.rate;

  }
  populateItemList(){
    return this.props.foodItems.map(item=>{
      return (
        <option key={item.FoodId+item.Name}>{item.Name}</option>
      )
    })
  }
  populateSupplierList(){
    return this.props.suppliers.map(supplier=>{
      return (
        <option key={supplier.Name+supplier.SupplierID}>{supplier.Name}</option>
      )
    })
  }
  setActiveItem(itemName){
      var _this = this;
      this.props.foodItems.map(item=>{
          if(item.Name === itemName  ){
              console.log(item.Name,item.Unit);
              _this.setState({
                  activeItem : item
              });
          }
      })
  }
  setActiveSupplier(supplierName){
    var _this=this;
    this.props.suppliers.map(supplier=>{
      if(supplier.Name==supplierName){
        _this.setState(
          {
            activeSupplier:supplier
          }
        )
      }
    })
  }
  setQty(qty){
    this.setState({
      qty:qty
    })
    console.log(this.state.qty)
  }
  setRate(rate){
    this.setState(
      {
        rate:rate
      }
    )
    console.log(this.state.rate)
  }
  render() {
    const cross = (<img src="../icons/cross.png" key={this.props.serial+"cross"} width="10rem" height="10rem" onClick={()=>{this.props.crosshandle(this.props.serial)}}></img>)
    return (
      <div   onMouseLeave={()=>{this.setState({hover:true}); console.log('Leave')}} onMouseEnter={()=>{this.setState({hover:false}); console.log('Entered '+this.props.serial)}} >

      <Row className="PurchaseListRow"  key={this.props.serial+"Row"}>
      <Form key={this.props.serial+"Form"}>
        <Col sm={3}>
        <select className="form-control" key={"foodItem"+this.props.serial} id={"FoodItem"+this.props.serial} onChange={()=>this.setActiveItem(document.getElementById("FoodItem"+this.props.serial).value)}>
          {this.populateItemList()}
        </select>
        </Col>
        <Col sm={3}>
        <select className="form-control" key={"supplier"+this.props.serial} id={"Supplier"+this.props.serial} onChange={()=>this.setActiveSupplier(document.getElementById("Supplier"+this.props.serial).value)}>
          {this.populateSupplierList()}
        </select>
      </Col>
      <Col sm={2}>
        <input className="form-control" id={"Qty"+this.props.serial} type="text" key={"qty"+this.props.serial} onChange={()=>{()=> this.setQty(document.getElementById("Qty"+this.props.serial).value)}}></input>
      </Col>
      <Col sm={1}>
        <strong>{this.state.activeItem.Unit}</strong>
      </Col>
      <Col sm={2}>
        <input className="form-control" id={"Rate"+this.props.serial} type="text" key={"rate"+this.props.serial} onChange={()=>{()=> this.setQty(document.getElementById("Rate"+this.props.serial).value)}}></input>
      </Col>
      <Col sm={1}>
        {this.state.hover||cross}
      </Col>
      </Form>
      </Row>
    </div>);
  }
}

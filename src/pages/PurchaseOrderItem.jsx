import React, {PropTypes} from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap'
import Radium,{Style} from 'radium'
export default class PurchaseOrderItem extends React.Component {
  constructor(props) {

    super(props);
    const foodItems = this.props.foodItems;

    this.state = {
        activeItem : foodItems[0],
        hover:true
    }
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

  render() {
    const cross = (<img src="../icons/cross.png" key={this.props.serial+"cross"} width="10rem" height="10rem" onClick={()=>{this.props.crosshandle(this.props.serial)}}></img>)
    return (
      <div   onMouseLeave={()=>{this.setState({hover:true}); console.log('Leave')}} onMouseEnter={()=>{this.setState({hover:false}); console.log('Entered '+this.props.serial)}} >

      <Row className="PurchaseListRow"  key={this.props.serial+"Row"}>
      <Form key={this.props.serial+"Form"}>
        <Col sm={4}>
        <select className="form-control" key={"foodItem"+this.props.serial} id={"FoodItem"+this.props.serial} onChange={()=>this.setActiveItem(document.getElementById("FoodItem"+this.props.serial).value)}>
          {this.populateItemList()}
        </select>
        </Col>
        <Col sm={4}>
        <select className="form-control" key={"supplier"+this.props.serial}>
          {this.populateSupplierList()}
        </select>
      </Col>
      <Col sm={1}>
        <input className="form-control" type="text" key={"qty"+this.props.serial}></input>
      </Col>
      <Col sm={1}>
        {this.state.activeItem.Unit}
      </Col>
      <Col sm={1}>
        <input className="form-control" type="text" key={"rate"+this.props.serial}></input>
      </Col>
      <Col sm={1}>
        {this.state.hover||cross}
      </Col>
      </Form>
      </Row>
    </div>);
  }
}

import React, {PropTypes} from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap'
import Radium,{Style} from 'radium'
import {DateField,Calender} from 'react-date-picker'
// import  'E:/Central Mess/node_modules/react-date-picker/index.css'

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
        activeSupplier:suppliers[0],
        date:''
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
      this.props.foodItems.map(item=>{
          if(item.Name === itemName  ){
              console.log(item.Name,item.Unit);
              this.setState({
                  activeItem : item
              });
          }
      })
  }
  setActiveSupplier(supplierName){
    this.props.suppliers.map(supplier=>{
      if(supplier.Name==supplierName){
        this.setState(
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
  setDate(date){
    this.setState(
      {
        date:date
      }
    )
    console.log(this.state.date)
  }
  render() {
    // const onChange = (dateString,{dateMoment,timeStamp}) = >{console.log(dateString)}
    let date = '2017-04-24'

    const cross = (<img src="../icons/cross.png" key={this.props.serial+"cross"} width="12rem" height="12rem" onClick={()=>{this.props.crosshandle(this.props.serial)}}></img>)
    return (
      <div className="PurchaseListRow"  onMouseLeave={()=>{this.setState({hover:true}); console.log('Leave')}} onMouseEnter={()=>{this.setState({hover:false}); console.log('Entered '+this.props.serial)}} >
        <Style scopeSelector=".PurchaseListRow" rules={{
              padding:"0.3rem",
              img:{
              opacity:0.5
            },
            "img:hover":{
              opacity:1
            }
          }}>

        </Style>
      <Row   key={this.props.serial+"Row"}>
      <Form key={this.props.serial+"Form"}>
        <Col sm={5}>
        <select className="form-control" key={"foodItem"+this.props.serial} id={"FoodItem"+this.props.serial} onChange={()=>this.setActiveItem(document.getElementById("FoodItem"+this.props.serial).value)}>
          {this.populateItemList()}
        </select>
        </Col>
      <Col sm={2}>
        <input className="form-control" id={"Qty"+this.props.serial} type="text" key={"qty"+this.props.serial} onChange={()=>{()=> this.setQty(document.getElementById("Qty"+this.props.serial).value)}}></input>
      </Col>
      <Col sm={1}>
        <div style={{"textAlign":"center"}}>
        <strong >{this.state.activeItem.Unit}</strong>
        </div>
      </Col>
      <Col sm={2}>
        <input className="form-control" id={"Rate"+this.props.serial} type="text" key={"rate"+this.props.serial} onChange={()=>{()=> this.setRate(document.getElementById("Rate"+this.props.serial).value)}}></input>
      </Col>
      <Col sm={2}>
        {this.state.hover||cross}
      </Col>
      </Form>
      </Row>
    </div>);
  }
}

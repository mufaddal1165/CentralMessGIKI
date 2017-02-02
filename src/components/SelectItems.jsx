import {Style} from 'radium'
import ItemsList from '../components/ItemsList.jsx'
import Immutable, {Map} from 'immutable'
import React,{Component} from "react"
import {Tooltip,OverlayTrigger,Button,Row,Form,Col} from 'react-bootstrap'
class SelectItems extends React.Component{

  constructor(props) {
      super(props)
      const data = this.props.data.toJS();
      this.state = {

          activeItem: data.foodItems[0],
          qty: 0,

      }
  }

  getFoodItems() {
      console.log(this.props.data.get('foodItems'))
      return (
          this.props.data.get('foodItems').map((item) => {
              return <option key={item.Name}>{item.Name}</option>
          })
      )
  }

  setActiveItem(itemName) {
      // var _this = this;
      this.props.data.get('foodItems').map(item => {
          if (item.Name === itemName) {
              console.log(item.Name, item.Unit);
              this.setState({
                  activeItem: item
              });
          }
      })
  }

  delItemListRow(index) {
      this.props.del(index);
  }

  addItemToList() {

      var item = this.state.activeItem;
      var qty = this.state.qty;
      var obj = {
          foodItem: item,
          qty: qty
      }
      this.props.add(obj);
  }

  onClickSubmit() {
      this.props.commit();
      this.props.clear();
  }

  renderForm() {
      return (
          <Form>

              <Row className="headings">
                  <Col sm={5}><strong>Item</strong></Col>
                  <Col sm={5}><strong>{this.state.activeItem.Unit}</strong></Col>
                  <Col sm={2}></Col>
              </Row>
              <p></p>
              <Style scopeSelector=".headings" rules={{textAlign: "center"}}></Style>
              <Row>
                  <Col sm={5}>
                      <select className='form-control' id="FoodItem"
                              onChange={() => this.setActiveItem(document.getElementById("FoodItem").value)}
                      >
                          {this.getFoodItems()}
                      </select>
                  </Col>
                  <Col sm={5}>
                      <input
                          className='form-control'
                          id="Qty"
                          onChange={() => {
                              var qty = document.getElementById("Qty").value;
                              this.setState({qty: qty})
                          }}
                          type="text"
                      >
                      </input>
                  </Col>
                  <Col sm={2}>
                      <Button onClick={() => this.addItemToList()}>
                          Add
                      </Button>
                  </Col>
              </Row>
          </Form>
      )
  }

  render() {
      const tooltip_submit = (<Tooltip id={'tooltip_' + 'submit_stockin'}>Saves changes in the database</Tooltip>)

      const submit = (
          <OverlayTrigger placement='bottom' overlay={tooltip_submit}><Button onClick={() => this.onClickSubmit()}>Submit</Button></OverlayTrigger>)
      return (
          <div >
                      <Row>
                          {this.renderForm()}
                      </Row>
                      <hr/>

                      <Row>
                          {//this.state.tmpSelectedList
                              this.props.data.get(this.props.dataComp).map((item, i) => {
                                  console.log(i)
                                  return <ItemsList itemName={item.foodItem.Name} qty={item.qty} key={i} serial={i}
                                                    unit={item.foodItem.Unit}
                                                    crosshandle={this.delItemListRow.bind(this)}/>
                              })
                          }
                          <hr/>

                          {!this.props.data.get(this.props.dataComp).size || submit}
                      </Row>

          </div>

      );
  }
}
export default SelectItems

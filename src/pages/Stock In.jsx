import React, { PropTypes } from 'react';
import Template from "../components/Template.jsx"
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Immutable, { Map } from 'immutable'
import SelectItems from "../components/SelectItems.jsx"
import { Col, Form, FormControl, FormGroup, Button, Row, Table } from 'react-bootstrap'
import Summary from '../components/Summary.jsx'
import moment from 'moment'
import { Style } from 'radium'

class StockIn extends React.Component {
  constructor(props) {
    super(props);
    const { fetchFoodItems, fetchPurchaseOrders } = this.props.actions
    fetchFoodItems()
    fetchPurchaseOrders()
    this.state = {
      purchaseOrder: null,
      query: ''
    }
  }
  getPurchaseOrder(id) {
    const purchaseOrders = this.props.purchaseOrder.get('purchaseOrder')
    purchaseOrders.map(order => {
      if (order.id == id) {
        this.setState({
          purchaseOrder: order
        })
        return
      }
    })
  }
  renderOrderDetails(state) {
    return (
      <div className="orderDetails">
        {' '}
        <Row>
          <Col sm={12}>
            <h4>Purchase Order# {state.id}</h4>
          </Col>

        </Row>
        <Row>
          <Col sm={12}>
            <strong>Supplier: </strong> <span>{state.supplier.name}</span>
          </Col>
        </Row>
        <Row>

          <Col sm={6}>
            <strong>Date of Issue: </strong><span>{moment(state.issueDate).format('DD-MMM-YY')}</span>
          </Col>
          <Col sm={6}>
            <strong>Date of Delivery: </strong><span>{moment(state.deliveryDate).format('DD-MMM-YY')}</span>

          </Col>

        </Row>
        <hr />
        <Table bsClass="table" responsive>
          <thead className="headings">
            <Style scopeSelector=".headings" rules={{
              fontWeight: 'bold',
              marginTop: '0.3rem',
              marginBottom: '0.3rem'
            }}>


            </Style>
            <tr>
              <th>Name</th>
              <th>Demand</th>
              <th>Rate</th>
              <th>Delivered</th>
              <th>Arrival</th>
            </tr>
          </thead>
          <tbody >
            <Style scopeSelector=".table"
              rules={{
                marginTop: '0.3rem',
                marginBottom: '0.3rem',
              }}
            >

            </Style>
            {
              state.items.map((order, i) => {
                return (
                  <tr key={`orderRow${i}`}>
                    <td >{order.foodItem.name} </td>
                    <td>{order.quantityDemanded} {order.foodItem.unit}</td>
                    <td>{order.rate}/{order.foodItem.unit}</td>
                    <td>{order.delivered} </td>
                    <td>
                      <input size="1" className='form-control' placeholder={`${order.foodItem.unit}s`} name={order.id} type="text" />
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
        <hr />
      </div>
    )
  }
  render() {
    if (this.props.data.get('isFetching') && this.props.purchaseOrder.get('isFetching')) {
      return <div>  Loading...</div>
    }

    return (<div>
      <Template>
        <Col sm={1}></Col>
        <Col sm={7}>
          <h3>Stock In</h3>
          {/*<SelectItems data={this.props.data} del={this.props.actions.delTmpStock} clear={this.props.actions.clearTempStock} add={this.props.actions.addTmpStock} commit={this.props.actions.commitStockAdds} dataComp='tmpStockAdded'/>*/}
          <Row>
            <Form inline>
              <FormGroup controlId="formInlineName">
                {' '}
                <input className='form-control' value={this.state.query} type="text" placeholder="Enter Purchase Order No" onBlur={() => {

                }} onChange={
                  (event) => {
                    this.setState({
                      query: event.target.value
                    })
                  }
                } />
              </FormGroup>
              {' '}
              <Button type="submit" onClick={() => {
                this.getPurchaseOrder(this.state.query)

              }}>
                <img src="icons/search.png" width="16px" height="16px"></img>
              </Button>
            </Form>
          </Row>
          <Row>

            {
              this.state.purchaseOrder ? this.renderOrderDetails(this.state.purchaseOrder) : null
            }

          </Row>
        </Col>
        <Col sm={1}></Col>
        <Col sm={3}>
          <Summary List={this.props.data.get('stockAdded')} heading="Items Added" />
        </Col>
      </Template>
    </div>);
  }
}
const mapStateToProps = state => ({
  data: state.centralMess,
  purchaseOrder: state.purchaseItem
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(StockIn)

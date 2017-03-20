import React from "react"
import { Button, HelpBlock, ControlLabel, Row, Col, Table, CheckBox, Form, FormControl, FormGroup, OverlayTrigger, Tooltip } from "react-bootstrap"
import FieldGroup from "../components/FieldGroup.jsx"
import Template from "../components/Template.jsx"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as Actions from '../actions'
import PurchaseOrderItem from "../components/PurchaseOrderItem.jsx"
import Radium, { Style, } from 'radium'
import Immutable, { List, Map } from 'immutable'
import { DateField } from 'react-date-picker'
import 'react-date-picker/index.css'
class PurchaseOrder extends React.Component {
  constructor(props) {
    super(props);

    var items = Map()
    var count = 0
    const suppliers = this.props.suppliers.get('suppliers')
    const foodItems = this.props.data.get('foodItems')
    const params = this.props.params.get('paramsToPurOrder')
    const _props = {
      suppliers: suppliers,
      foodItems: foodItems,
      crosshandle: this.delRow.bind(this),
      transmitter: this.handleChange.bind(this),
      actions: this.props.actions

    }
    params.map(item => {
      items = items.merge(Map.of(count, <PurchaseOrderItem {..._props} serial={count++} param={item} />))
    })
    this.state = {
      itemRows: items,
      rowcount: count,
      data: Map() // data from child components
    }

  }
  componentWillMount() {

    const { fetchSuppliers, fetchFoodItems } = this.props.actions
    fetchSuppliers()
    fetchFoodItems()
  }
  componentDidMount() {

  }
  handleChange(index, name, value) {

    var change = Map.of(index, Map.of( name, value ) )
    var data = this.state.data.mergeDeep(change)
    this.setState({
      data: data
    })
    console.log(data.toJS())
  }
  addRow() {
    const props = {
      suppliers: this.props.suppliers.get('suppliers'),
      foodItems: this.props.data.get('foodItems'),
      serial: this.state.rowcount,
      crosshandle: this.delRow.bind(this),
      actions: this.props.actions,
      transmitter: this.handleChange.bind(this)
    }
    var rows = this.state.itemRows.merge(Map.of(this.state.rowcount, <PurchaseOrderItem {...props} />));
    var rowCount = this.state.rowcount + 1;
    this.setState(
      {
        itemRows: rows,
        rowcount: rowCount
      }
    )

  }
  delRow(index) {
    var rows = this.state.itemRows.delete(index)
    var data = this.state.data.delete(index)
    let count = this.state.rowcount - 1
    this.setState({
      itemRows: rows,
      rowcount: count,
      data: data
    })
  }

  render() {
    const suppliers = this.props.suppliers.get('suppliers')
    const foodItems = this.props.data.get('foodItems')
    const params = this.props.params.get('paramsToPurOrder')

    const tooltip_add = (<Tooltip id='tooltip_add'>To add more items for purchase order</Tooltip>)
    const tooltip_submit = (<Tooltip id='tooltip_submit'> Saves the purchase order</Tooltip>)

    const submit = (<OverlayTrigger placement='bottom' overlay={tooltip_submit}>
      <Button onClick={() => this.handleSubmit()}>
        Submit
      </Button>
    </OverlayTrigger>)

    const headings = (
      <div>
        <Style scopeSelector={headings}
          rules={{

            ".headings": {
              textAlign: "center",
              fontWeight: "bold"
            },
            ".row": {
              margin: "0.3rem"
            }
          }}

        >
        </Style>
        <div className="headings">
          <Row>
            <Col sm={3}>Item</Col>
            <Col sm={3}>Supplier</Col>
            <Col sm={1}>Qty</Col>
            <Col sm={1}>Unit</Col>
            <Col sm={1}>Rate</Col>
            <Col sm={2}>Delivery Date</Col>
          </Row>
        </div>
      </div>
    )
    if (this.props.data.get('isFetching') && this.props.suppliers.get('isFetching')){
      return (
        <div>Loading ... </div>
      )
    }
    return (<div>

      <Template>
        <Col sm={1}>
        </Col>
        <Col sm={10}>
          <h3>Create Purchase Order</h3>
          <hr />

          <Row>
            {headings}
          </Row>
          <Row>
            {this.state.itemRows.map(item => item)}
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <Col sm={5}>
                <OverlayTrigger placement='bottom' overlay={tooltip_add}>
                  <Button onClick={() => this.addRow()}>
                    Add Item
                      </Button>
                </OverlayTrigger>
              </Col>
              <Col sm={2}></Col>
              <Col sm={5}>
                {this.state.rowcount ? submit : null}
              </Col>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>



          </Row>
        </Col>

        <Col sm={1}>

        </Col>
      </Template>
    </div>);
  }
}
const mapStateToProps = state => ({
  data: state.centralMess,
  suppliers: state.suppliers,
  params: state.purchaseItem
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder)

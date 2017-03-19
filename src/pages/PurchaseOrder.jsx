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
    this.state = {
      itemRows: Map()
    }

  }
  componentWillMount() {

    const { fetchSuppliers, fetchFoodItems } = this.props.actions
    fetchSuppliers()
    fetchFoodItems()


  }
  componentDidMount() {
    const suppliers = this.props.suppliers.get('suppliers')
    const foodItems = this.props.data.get('foodItems')
    console.log('params',this.props.params)
    this.setState({
      rowcount: 0,

    })
  }

  addRow() {
    var rows = this.state.itemRows.merge(Map.of(this.state.rowcount, <PurchaseOrderItem suppliers={this.props.suppliers.get('suppliers')} foodItems={this.props.data.get('foodItems')} actions={this.props.actions} serial={this.state.rowcount} crosshandle={this.delRow.bind(this)} />));
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
    let count = this.state.rowcount - 1
    this.setState({
      itemRows: rows,
      rowcount: count
    })
  }
  render() {
    const suppliers = this.props.suppliers.get('suppliers')
    const foodItems = this.props.data.get('foodItems')
    const tooltip_add = (<Tooltip id='tooltip_add'>To add more items for purchase order</Tooltip>)
    const tooltip_submit = (<Tooltip id='tooltip_submit'> Saves the purchase order</Tooltip>)
    const submit = (<OverlayTrigger placement='bottom' overlay={tooltip_submit}>
      <Button onClick={() => { }}>
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
            <Col sm={3}>Delivery Date</Col>
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
          <hr />

          <Row>
            {headings}
          </Row>
          <Row>
            {this.state.itemRows}
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
        </Col>

        <Col sm={1}>

        </Col>
      </Template>
    </div>);
  }
}
const mapStateToProps = state => ({
  data: state.centralMess,
  suppliers: state.suppliers
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder)

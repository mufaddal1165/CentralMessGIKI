import React from "react"
import {Button, HelpBlock, ControlLabel, Row, Col, Table, CheckBox, Form, FormControl, FormGroup} from "react-bootstrap"
import FieldGroup from "../components/FieldGroup.jsx"
import Template from "../components/Template.jsx"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"


class PurchaseOrder extends React.Component {
  constructor(props) {
    super(props);
  }
  
  addTableRow(){
    return (
    <tr>
      <td>
<FieldGroup
  Id="PurchaseOrderItem"
  componentClass="select"
  >
  {/*this.populateItemList()*/}
</FieldGroup>
</td>
<td>
  <FieldGroup
  Id="Supplier"
  componentClass="select"

  >
  {/**/}
</FieldGroup>
</td>
<td>
  <FieldGroup
    Id="Quantity"
    type="text"
    />
</td>
</tr>)
  }
  
  render() {
    return (<div>

      <Template>
        <Col sm={3}>
        </Col>
        <Col sm={6}>
          <h3>Create Purchase Order</h3>
          <Form >
            <Table>
              <thead>
                <tr>
                <th>
                  Item
                </th>
                <th>
                  Supplier
                </th>
                <th>
                  Quantity
                </th>
                </tr>
              </thead>
              <tbody>
                {this.addTableRow()}
            </tbody>
            </Table>
            <Button

              >
              Add
            </Button>
            <Button>
              Remove
            </Button>
          <Button>
            Edit
          </Button>
          </Form>

        </Col>
        <Col sm={3}>
        </Col>
      </Template>
    </div>);
  }
}
export default PurchaseOrder

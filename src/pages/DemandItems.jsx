import React, {PropTypes} from 'react';
import Template from "../components/Template.jsx"
import {bindActionCreators} from "redux"
import {connect} from 'react-redux'
import * as Actions from '../actions'
import Immutable, {Map} from 'immutable'
import SelectItems from "../components/SelectItems.jsx"
import {Col} from 'react-bootstrap'
class DemandItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Template>
        <Col sm={3}></Col>
        <Col sm={4}>
          <h3>Daily Items Demand</h3>
          <SelectItems data={this.props.data} del={this.props.actions.delTmpDemand} clear={this.props.actions.clearTempDemand} add={this.props.actions.addTempDemand} commit={this.props.actions.commitStockDemand} dataComp='tmpDemandedToday'/>

        </Col>
        <Col sm ={1}></Col>
        <Col sm={4}></Col>
      </Template>
    </div>);
  }
}

const mapStateToProps = state => ({
    data: state.centralMess
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(DemandItems)

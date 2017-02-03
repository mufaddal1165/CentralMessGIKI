import React, {PropTypes} from 'react';
import Template from "../components/Template.jsx"
import {bindActionCreators} from "redux"
import {connect} from 'react-redux'
import * as Actions from '../actions'
import Immutable, {Map} from 'immutable'
import SelectItems from "../components/SelectItems.jsx"
import {Col} from 'react-bootstrap'
import Summary from '../components/Summary.jsx'

class StockIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Template>
        <Col sm={3}></Col>
        <Col sm={4}>
          <h3>Stock In</h3>
          <SelectItems data={this.props.data} del={this.props.actions.delTmpStock} clear={this.props.actions.clearTempStock} add={this.props.actions.addTmpStock} commit={this.props.actions.commitStockAdds} dataComp='tmpStockAdded'/>

        </Col>
        <Col sm={1}></Col>
        <Col sm={4}>
          <Summary List={this.props.data.get('stockAdded')} heading="Items Added"/>
        </Col>
      </Template>
    </div>);  }
}
const mapStateToProps = state => ({
    data: state.centralMess
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(StockIn)

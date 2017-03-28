import React, { PropTypes } from 'react';
import Template from "../components/Template.jsx"
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Immutable, { Map } from 'immutable'
import SelectItems from "../components/SelectItems.jsx"
import { Col } from 'react-bootstrap'
class DemandItems extends React.Component {
  constructor(props) {
    super(props);
    const {fetchFoodItems} = this.props.actions
    fetchFoodItems()
  }

  render() {
    const propsDemand = {
      data: this.props.data,
      del: this.props.actions.deleteDemand,
      commit: this.props.actions.commitDemands,
      add: this.props.actions.addDemand,
      list: this.props.demands.get('demands')
    }
    if (this.props.data.get('isFetching')) {
      return <div>Loading .. </div>
    }
    return (<div>

      <Template>
        <Col sm={1}></Col>
        <Col sm={7}>
          <h3>Daily Items Demand</h3>
          <SelectItems {...propsDemand} />

        </Col>
        <Col sm={1}></Col>
        <Col sm={3}></Col>
      </Template>
    </div>);
  }
}

const mapStateToProps = state => ({
  data: state.centralMess,
  demands: state.demands
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(DemandItems)

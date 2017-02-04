import React, {PropTypes} from 'react';
import FoodSummary from '../components/FoodSummary.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions'
import Template from '../components/Template.jsx'
import {Col,Row} from 'react-bootstrap'

class FoodItemsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Template>
        <Col sm={2}></Col>
        <Col sm={8}>
          <h3>Food Items Summary</h3>
          <FoodSummary foodItems={this.props.data.get('foodSummary')}></FoodSummary>

        </Col>
        <Col sm={2}></Col>

      </Template>

    </div>);
  }
}
const mapStateToProps = state =>(
    {
        data : state.centralMess
    }
)
const mapDispatchToProps = dispatch =>({
    actions : bindActionCreators(Actions,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(FoodItemsPage)

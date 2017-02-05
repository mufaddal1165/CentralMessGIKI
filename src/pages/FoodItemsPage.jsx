import React, {PropTypes} from 'react';
import FoodSummary from '../components/FoodSummary.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions'
import Template from '../components/Template.jsx'
import {Col,Row,Form,FormGroup,FormControl,Button} from 'react-bootstrap'
import {Style} from 'radium'
class FoodItemsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="headerSummaryPage">
      <Style scopeSelector=".headerSummaryPage" rules={{
          h3:{
            margin:'initial'
          },
          input:{
            margin:'initial'
          }
        }}>
      </Style>
      <Template>
        <Col sm={2}></Col>
        <Col sm={8}>
          <Row>
            <Col sm={7}>
          <h3>Food Items Summary</h3>
          </Col>
          <Col sm={5}>
            <Form inline>
              <FormGroup controlId="formInlineName">
                {' '}
                <FormControl type="text" placeholder="Enter Item Name" />
              </FormGroup>
              {' '}
              <Button type="submit">
                <img src="icons/search.png" width="16px" height="16px"></img>
              </Button>
            </Form>
          </Col>
          </Row>
          <Row className="test">
            <Style scopeSelector=".test" rules={{
                margin:'1rem'
              }}>

            </Style>
          <FoodSummary foodItems={this.props.data.get('foodSummary')}></FoodSummary>
          </Row>
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

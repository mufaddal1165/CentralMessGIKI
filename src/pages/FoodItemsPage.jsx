import React, { PropTypes } from 'react';
import FoodSummary from '../components/FoodSummary.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Template from '../components/Template.jsx'
import { Col, Row, Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Style } from 'radium'
import { List } from 'immutable'
class FoodItemsPage extends React.Component {
  constructor(props) {
    super(props);
    const { fetchFoodItems } = this.props.actions
    fetchFoodItems()
    this.state = {
      foodItems: this.props.data.get('foodItems').toJS(),
      searchtext: ''
    }
    this.filter = this.filter.bind(this)
  }
  addToParams(obj) {
    const { addToPrItem } = this.props.actions
    addToPrItem(obj)
  }
  componentDidMount() {

  }
  filter(event) {
    this.setState({
      searchtext: event.target.value
    })
    var items = List()
    if (this.state.searchtext !== '') {
      this.props.data.get('foodItems').map(item => {
        if (item.Name.toLowerCase().includes(this.state.searchtext.toLowerCase())) {
          items = items.push(item)
        }
      })
      this.setState({
        foodItems: items
      })
    }

  }
  render() {

    if (this.props.data.get('isFetching')){
      return <div>Loading...</div>
    }
    return (<div className="headerSummaryPage">
      <Style scopeSelector=".headerSummaryPage" rules={{
        h3: {
          margin: 'initial'
        },
        input: {
          margin: 'initial'
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
                  <FormControl type="text" placeholder="Enter Item Name" value={this.state.searchtext} onChange={this.filter} onBlur={() => {
                    this.setState({
                      foodItems: this.props.data.get('foodItems')
                    })
                  }} />
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
              margin: '1rem'
            }}>

            </Style>
            <FoodSummary foodItems={this.state.foodItems} paramhandle={this.addToParams.bind(this)}></FoodSummary>

          </Row>
        </Col>
        <Col sm={2}></Col>

      </Template>

    </div>);
  }
}
const mapStateToProps = state => (
  {
    data: state.centralMess,

  }
)
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(FoodItemsPage)

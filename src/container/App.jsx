import React ,{Component} from "react"
import {Row, Col, Table} from "react-bootstrap"
import axios from "axios"
import NavBar from "../components/NavSide.jsx"
import Header from "../components/Header.jsx"
import Box from "../components/Box.jsx"
import Template from "../components/Template.jsx"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions'

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
      const low_stock_theme ={
        'color':'red',
        'background':'white'
      }
      const upcoming_stock_theme ={
        'color':'#388E3C',
        'background':'white'
      }
        return (
            <div  >

                <Template >
                        <Col sm={12}>
                            <Col sm={4}>
                              <Box stock={this.props.data.get('lowStock')} heading="Low in Stock" theme={low_stock_theme} BoxID={1}/>
                            </Col>
                            <Col sm={4}>
                              <Box stock={this.props.data.get('upComingDeliveries')} heading="Upcoming Deliveries" theme={upcoming_stock_theme} BoxID={2}/>

                            </Col>
                            <Col sm={4}>
                            </Col>
                        </Col>

                    </Template>
            </div>

        );
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
export default connect(mapStateToProps,mapDispatchToProps)(App)

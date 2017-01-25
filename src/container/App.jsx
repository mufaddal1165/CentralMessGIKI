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
        return (
            <div >

                <Template >
                        <Col sm={12}>
                            <Col sm={4}>
                                <Box classn="low" tableHeading="Low in Stock" img="icons/low.png" headingColor="#D21616"
                                     background="#F9EFE0" url="data.json">
                                </Box>
                            </Col>
                            <Col sm={4}>
                                <Box classn="updev" tableHeading="Upcoming Deliveries" img="icons/updev.png"
                                     headingColor="#27AE60" background="#d6fce6" url="updev.json">
                                </Box>

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
        data : state
    }
)
const mapDispatchToProps = dispatch =>({
    actions : bindActionCreators(Actions,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(App)

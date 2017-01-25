import React from "react"
import NavBar from "./NavSide.jsx"
import Header from "./Header.jsx"
import Box from "./Box.jsx"
import {Row,Col,Table} from "react-bootstrap"
import axios from "axios"
var style_nav = {
  "backgroundColor" : "#2c3e50",
  "color":"white",
  "height":"120vh",

}
class Template extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }
  render(){
    return (
      <div >

        <Col sm={2} style={style_nav} >
          <NavBar/>
        </Col>
        <Col sm={10}>
          <Row>
            <Header/>
          </Row>
          <Row>
            {this.props.children}
          </Row>
        </Col>

      </div>

    );
  }
}
export default Template

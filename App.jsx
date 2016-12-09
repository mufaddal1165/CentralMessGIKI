import React from "react"
import NavBar from "./NavSide.jsx"
import Header from "./Header.jsx"
import Box from "./Box.jsx"
import {Row,Col,Table} from "react-bootstrap"
import axios from "axios"
var style_nav = {
  "backgroundColor" : "#2c3e50",
  "color":"white",
  "height":"100vh",

}
class App extends React.Component {
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
            <Col sm={12}>
              <Col sm={4}>
                <Box classn="low" tableHeading="Low in Stock" img="icons/low.png" headingColor="#D21616" background="#F9EFE0" url="data.json">
                </Box>
              </Col>
              <Col sm={4}>
                <Box classn="updev" tableHeading="Upcoming Deliveries" img="icons/updev.png" headingColor="#27AE60" background="#d6fce6" url="updev.json">
                </Box>

              </Col>
              <Col sm={4}>
                //Box
              </Col>
            </Col>

          </Row>
        </Col>

      </div>

    );
  }
}
export default App

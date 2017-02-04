import React from "react"
import NavBar from "./NavSide.jsx"
import Header from "./Header.jsx"
import Box from "./Box.jsx"
import {Row, Col, Table} from "react-bootstrap"
import axios from "axios"
import {grey,teal,teal_grey} from './themes.js'
import {Style} from 'radium'
const currentTheme = teal_grey;
var style_nav = {
    "backgroundColor": currentTheme.navbar,//"#16a085",
    "color": "white",
    "height": "120vh",

}
class Template extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {

      }

    render() {
        return (
            <div className="parent_template" >
              <Style scopeSelector="body" rules={{
                  backgroundColor:'red'
                }}>


              </Style>

                <Col sm={2} style={style_nav}>
                    <NavBar buttonColor={currentTheme.navbutton}/>
                </Col>
                <Col sm={10}>
                    <Row>
                        <Header color={currentTheme.header}/>
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

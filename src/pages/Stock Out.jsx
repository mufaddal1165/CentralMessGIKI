import React from "react"
import {
    Button,
    HelpBlock,
    ControlLabel,
    Row,
    Col,
    Table,
    FieldGroup,
    CheckBox,
    Form,
    FormControl,
    FormGroup
} from "react-bootstrap"
import {connect} from 'react-redux'
import Template from "../components/Template.jsx"
import NavBar from "../components/NavSide.jsx"
import Header from "../components/Header.jsx"
import Box from "../components/Box.jsx"


class App extends React.Component {

    render() {
        return (
            <div >
                <Template>
                        <Col sm={2}>
                        </Col>
                        <Col sm={7}>
                            <h3>
                                Stock Out
                            </h3>
                            <Form horizontal>
                                <FormGroup controlId="FoodItem">
                                    <Col componentClass={ControlLabel} sm={4}>
                                        Food Item
                                    </Col>
                                    <Col sm={8}>
                                        <FormControl
                                            componentClass="select"
                                            placeholder="Food">
                                            <option value="1">Potato</option>
                                            <option value="2">Chicken</option>
                                        </FormControl>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="Qty">
                                    <Col componentClass={ControlLabel} sm={4}>
                                        Weight/Quantity
                                    </Col>
                                    <Col sm={8}>
                                        <FormControl type="text">
                                        </FormControl>
                                    </Col>
                                </FormGroup>
                                <Col sm={4}></Col>
                                <Col sm={8}>
                                    <Button type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Form>
                        </Col>
                    </Template>
            </div>
        );
    }
}
export default App

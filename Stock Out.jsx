import React from "react"
import NavBar from "./NavSide.jsx"
import Header from "./Header.jsx"
import Box from "./Box.jsx"
import {Button,HelpBlock,ControlLabel,Row,Col,Table,FieldGroup,CheckBox,Form,FormControl,FormGroup} from "react-bootstrap"
var style_nav = {
  "backgroundColor" : "#2c3e50",
  "color":"white",
  "height":"100vh",

}
var lowItems = [{"Name":'Chicken',"Left":"100 kg"},{"Name":'Beef',"Left":"95 kg"},{"Name":'Onions',"Left":"150 kg"}]
var expectedLibrary = [{}]
class App extends React.Component {

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


            <Col sm={2}>


            </Col>


            <Col sm={7}>


              <h3>
                Stock Out
              </h3>


              <Form horizontal>


                <FormGroup controlId="FoodItem" >


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


          </Row>


        </Col>



      </div>

    );
  }
}
export default App

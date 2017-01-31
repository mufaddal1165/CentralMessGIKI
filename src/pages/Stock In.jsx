import React from "react"
import NavBar from "../components/NavSide.jsx"
import Header from "../components/Header.jsx"
import Box from "../components/Box.jsx"
import {Button, HelpBlock, ControlLabel, Row, Col, Table, CheckBox, Form, FormControl, FormGroup} from "react-bootstrap"
import FieldGroup from "../components/FieldGroup.jsx"
import Template from "../components/Template.jsx"
import {bindActionCreators} from "redux"
import {connect } from 'react-redux'
import * as Actions from '../actions'
import Summary from '../components/Summary.jsx'

class StockIn extends React.Component {

constructor(props){
    super(props)
    const data = this.props.data;
    this.state = {
        activeItem : data.foodItems[0]
    }
}
getFoodItems(){
    console.log(this.props.data)
    return (
        this.props.data.foodItems.map((item)=>{
          return <option key={item.Name}>{item.Name}</option>
        })
    )
}
setActiveItem(itemName){
    var _this = this;
    this.props.data.foodItems.map(item=>{
        if(item.Name === itemName  ){
            console.log(item.Name,item.Unit);
            _this.setState({
                activeItem : item
            });
        }
    })
}
renderForm(){
    return (
                    <Form>
                            <FieldGroup
                                Id="FoodItem"
                                label="Food Item"
                                componentClass="select"
                                onChange={()=>this.setActiveItem(document.getElementById("FoodItem").value)}
                            >
                            {this.getFoodItems()}
                            </FieldGroup>
                            <FieldGroup
                                Id="Qty"
                                label={this.state.activeItem.Unit}
                                type="text"
                            >
                            </FieldGroup>
                            <Button>
                              Submit
                            </Button>


                        </Form>
    )
}

    render() {
        return (
            <div >
                <Template>
                    <Col sm={2}>
                    </Col>
                    <Col sm={4}>
                        <h3>
                            Stock In
                        </h3>
                        {this.renderForm()}
                    </Col>
                    <Col sm={2}></Col>
                    <Col sm={4}>
                      <Summary heading="Items Added" List={this.props.data.stockAdded} actions={this.props.actions}/>
                    </Col>
                </Template>
            </div>

        );
    }
}

const mapStateToProps = state=>({
    data : state.centralMess
})
const mapDispatchToProps = dispatch=>({
    actions : bindActionCreators(Actions,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(StockIn)

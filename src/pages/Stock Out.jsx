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
import { connect } from 'react-redux'
import Template from "../components/Template.jsx"
import NavBar from "../components/NavSide.jsx"
import Header from "../components/Header.jsx"
import Box from "../components/Box.jsx"
import SelectItems from "../components/SelectItems.jsx"
import { bindActionCreators } from "redux"
import * as Actions from '../actions'
import Immutable, { Map } from 'immutable'
import Summary from "../components/Summary.jsx"

class StockOut extends React.Component {
    constructor(props) {
        super(props)
        const { fetchFoodItems } = this.props.actions
        fetchFoodItems()
    }

    render() {
        if(this.props.data.get('isFetching')){
            return <div>Loading...</div>
        }
        return (
            <div >
                <Template>

                    <Col sm={3}></Col>
                    <Col sm={4}>
                        <h3>Stock Drawings</h3>
                        <SelectItems data={this.props.data} del={this.props.actions.delTmpDrawings} clear={this.props.actions.clearTempDrawings} add={this.props.actions.addTempDrawings} commit={this.props.actions.commitStockDrawings} dataComp='tmpDrawnToday' isStockOut={true} />

                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={4}>
                        <Summary heading="Food Item Summary" List={this.props.data.get('stockAdded')} />
                    </Col>
                </Template>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    data: state.centralMess
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(StockOut)

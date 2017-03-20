import React, { PropTypes, Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import Radium, { Style } from 'radium'
import { DateField, Calender } from 'react-date-picker'
import 'react-date-picker/index.css'

class PurchaseOrderItem extends Component {

    constructor(props) {
        super(props)
        let foodItems = this.props.foodItems.toJS();
        let supplier = this.props.suppliers.toJS();
        this.state = {
            hover: false,
            date: Date.now(),
            unit: foodItems[0].Unit,
            foodItem: this.props.param ? this.props.param.FoodId : ''

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {

        console.log(this.state)
        const val = event.target.value
        const name = event.target.name
        this.setState({
            [name]: val
        })
        if (name == 'foodItem') {
            this.props.foodItems.map(item => {
                if (item.FoodId == val) {
                    this.setState({
                        unit: item.Unit
                    })
                    return
                }
            })
        }
        this.props.transmitter(this.props.serial, name, val)
    }
    handleDate(event) {

    }

    render() {
        const { foodItems, suppliers, serial } = this.props
        const cross = (<img src="../icons/cross.png" key={this.props.serial + "cross"} width="12rem" height="12rem"
            onClick={() => {
                this.props.crosshandle(this.props.serial)
            }}></img>)
        return (
            <div className="PurchaseListRow" onMouseLeave={() => {
                this.setState({ hover: false });
            }} onMouseEnter={() => {
                this.setState({ hover: true });
            }}>
                <Style scopeSelector=".PurchaseListRow" rules={{
                    padding: "0.3rem",
                    img: {
                        opacity: 0.5,
                    },
                    "img:hover": {
                        opacity: 1,
                    }
                }}>

                </Style>
                <form action="">
                    <Row>
                        <Col sm={3}>
                            <select name="foodItem" className="form-control" key={`foodItem_${serial}`} onChange={this.handleChange} value={this.state.foodItem}>
                                {
                                    foodItems.map(foodItem => <option value={foodItem.FoodId} key={`FoodItem_${foodItem.FoodId}_${serial}`}>{foodItem.Name}</option>)
                                }
                            </select>
                        </Col>
                        <Col sm={3}>
                            <select name="supplier" className="form-control" key={`supplier_${serial}`}
                                onChange={this.handleChange} value={this.state.supplier}>
                                {
                                    suppliers.map(supplier => <option value={supplier.SupplierId} key={`Supplier_${supplier.SupplierId}_${serial}`}>{supplier.Name}</option>)
                                }
                            </select>
                        </Col>
                        <Col sm={1}>
                            <input type="text" name="qty" value={this.state.qty} className="form-control" key={`qty_${serial}`} onChange={this.handleChange} />
                        </Col>
                        <Col sm={1}>
                            <div style={{ 'textAlign': 'center' }}>
                                {this.state.unit}
                            </div>
                        </Col>
                        <Col sm={1}>
                            <input type="text" name="rate" className="form-control" key={`rate_${serial}`} value={this.state.rate} onChange={this.handleChange} />
                        </Col>
                        <Col sm={2}  >

                            <DateField name="date" dateFormat='DD-MM-YY' key={`date_${serial}`} value={this.state.date} onChange={(value) => {
                                this.setState({

                                    date: value
                                })
                                this.props.transmitter(0, "date", this.state.date)
                            }} />
                        </Col>
                        <Col sm={1}>
                            {!this.state.hover || cross}
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}

export default PurchaseOrderItem
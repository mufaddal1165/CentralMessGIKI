import React, { PropTypes, Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import Radium, { Style } from 'radium'
import { DateField, Calender } from 'react-date-picker'
import 'react-date-picker/index.css'

class PurchaseOrderItem extends Component {

    constructor(props) {
        super(props)
        let foodItems = this.props.foodItems.toJS();
        this.state = {
            activeItem: foodItems[0],
            hover:false
        }
    }
    
    
    setActiveItem(name) {
        let foodItems = this.props.foodItems
        foodItems.map(item => {
            if (item.Name === name) {
                this.setState({
                    activeItem: item
                })
            }
        })
    }
    render() {
        const { foodItems, suppliers, serial } = this.props
        const cross = (<img src="../icons/cross.png" key={this.props.serial + "cross"} width="12rem" height="12rem"
                            onClick={() => {
                                this.props.crosshandle(this.props.serial)
                            }}></img>)
        return (
            <div className="PurchaseListRow" onMouseLeave={() => {
                this.setState({hover: false});
            }} onMouseEnter={() => {
                this.setState({hover: true});
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
                <Row>
                    <Col sm={3}>
                        <select name="" className="form-control" id={`foodItem_${serial}`} key={`foodItem_${serial}`} onChange={()=>this.setActiveItem(document.getElementById(`foodItem_${serial}`).value)}>
                            {
                                foodItems.map(foodItem => <option key={`FoodItem_${foodItem.FoodId}_${serial}`}>{foodItem.Name}</option>)
                            }
                        </select>
                    </Col>
                    <Col sm={3}>
                        <select name="" id="" className="form-control" key={`supplier_${serial}`}>
                            {
                                suppliers.map(supplier => <option key={`Supplier_${supplier.SupplierId}_${serial}`}>{supplier.Name}</option>)
                            }
                        </select>
                    </Col>
                    <Col sm={1}>
                        <input type="text" className="form-control" key={`qty_${serial}`} />
                    </Col>
                    <Col sm={1}>
                        {this.state.activeItem.Unit}
                    </Col>
                    <Col sm={1}>
                        <input type="text" className="form-control" key={`rate_${serial}`} />
                    </Col>
                    <Col sm={2}>
                        <DateField dateFormat='YYYY-MM-DD' key={`date_${serial}`} />
                    </Col>
                    <Col sm={1}>
                    {!this.state.hover || cross}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PurchaseOrderItem
import { Style } from 'radium'
import ItemsList from '../components/ItemsList.jsx'
import Immutable, { Map } from 'immutable'
import React, { Component } from "react"
import { Tooltip, OverlayTrigger, Button, Row, Form, Col } from 'react-bootstrap'
import ModalMessage from 'react-modal-message-wrapper'
class SelectItems extends React.Component {

    constructor(props) {
        super(props)
        const data = this.props.data.toJS();

        this.state = {

            activeItem: data.foodItems[0],
            qty: 0,
            isConfDlgVsbl: false
        }
        this.setActiveItem = this.setActiveItem.bind(this)
    }

    getFoodItems() {
        return (
            this.props.data.get('foodItems').map((item) => {
                return <option value={item.id} key={item.name}>{item.name}</option>
            })
        )
    }

    setActiveItem(event) {
        const val = event.target.value
        this.props.data.get('foodItems').map(item => {
            if (item.id == val) {
                this.setState({
                    activeItem: item
                });
                return
            }
        })
    }

    delItemListRow(index) {
        this.props.del(index);
    }

    addItemToList() {

        var item = this.state.activeItem;
        var qty = this.state.qty;
        var obj = {
            foodItem: item,
            qty: qty
        }
        this.props.add(obj);
    }

    onClickSubmit() {

        if (confirm('Are you sure? These changes will be written to database?')) {
            this.props.commit();
        }
    }


    render() {

        if (this.props.data.get('isFetching')) {
            return <div>Loading ..</div>
        }
        const { activeItem } = this.state
        const unit = activeItem ? activeItem.unit : ''
        const quantity = activeItem ? activeItem.quantity : ''


        const addButton = quantity ? (<button className="btn btn-default" onClick={() => this.addItemToList()} >
            Add
        </button>) : (<button className="btn btn-default" onClick={() => this.addItemToList()} disabled >
                Add
        </button>)
        const tooltip_submit = (<Tooltip id={'tooltip_' + 'submit_stockin'}>Saves changes in the database</Tooltip>)
        // let displayMessage =(this.state.isConfDlgVsbl)?<ModalMessage key='confirmation-dialog' message='Are you sure you want to save?' primaryButton='OK' primaryButtonClicked={this.dialogMsg}/>:null;
        const submit = (
            <OverlayTrigger placement='bottom' overlay={tooltip_submit}><Button onClick={() => this.onClickSubmit()}>Submit</Button></OverlayTrigger>)
        return (
            <div >
                <Row>
                    <Form>

                        <Row className="headings">
                            <Col sm={4}><strong>Item</strong></Col>
                            <Col sm={2}><strong>{unit}</strong></Col>
                            <Col sm={4}><strong>Stock</strong></Col>
                            <Col sm={2}></Col>
                        </Row>
                        <p></p>
                        <Style scopeSelector=".headings" rules={{ textAlign: "center" }}></Style>
                        <Row>
                            <Col sm={4}>
                                <select className='form-control' id="FoodItem"
                                    onChange={this.setActiveItem}
                                >
                                    {this.getFoodItems()}
                                </select>
                            </Col>
                            <Col sm={2}>
                                <input
                                    className='form-control'
                                    id="Qty"
                                    onChange={(event) => {
                                        var qty = event.target.value
                                        this.setState({ qty: qty })
                                    }}
                                    type="text"
                                >
                                </input>
                            </Col>
                            <Col sm={4}>
                                <input className='form-control'
                                    id="inStockQty"
                                    type="text"
                                    disabled="disabled"
                                    value={`${quantity} ${unit}`}
                                />
                            </Col>
                            <Col sm={2}>
                                {addButton}
                            </Col>
                        </Row>
                    </Form>

                </Row>
                <hr />

                <Row>
                    {
                        this.props.list.map((item, i) => {
                            return <ItemsList itemName={item.foodItem.name} qty={item.qty} key={i} serial={i}
                                unit={item.foodItem.unit}
                                crosshandle={this.delItemListRow.bind(this)} />
                        })
                    }
                    <hr />

                    {!this.props.list.size || submit}
                </Row>

            </div>

        );
    }
}
export default SelectItems

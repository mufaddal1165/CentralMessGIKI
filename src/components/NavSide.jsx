import React from "react"
import { Button } from "react-bootstrap"
import { Row, Col, Image } from "react-bootstrap"
import NavBarButtons from "./NavBarButtons.jsx"
import { Link } from "react-router"
import { Style } from "radium"

class NavBar extends React.Component {
    render() {
        const buttonColor = this.props.buttonColor
        const stockIn = {
            icon: "icons/stock in.png",
            text: "Stock In",
            link: "StockIn",
            tooltip: "Enter the details here when new stock arrives in the store",
            color: buttonColor
        }
        const demand = {
            icon: "icons/demand.png",
            text: "Demand Items",
            link: "DemandItems",
            tooltip: "Record the items demanded by the cooking staff. The entries corresponding to the paper must be made here",
            color: buttonColor
        }
        const stockOut = {
            icon: "icons/stock out.png",
            text: "Stock Out",
            link: "StockOut",
            tooltip: "Use when you draw the food items out of store for cooking",
            color: buttonColor
        }
        const itemsAvailable = {
            icon: "icons/summary.png",
            text: "Items Available",
            link: "FoodItems",
            tooltip: "List of food items and there quantity present in the system",
            color: buttonColor
        }
        const vouchers = {
            icon: "icons/payment.png", text: "Payment Vouchers", color: buttonColor
        }
        const settings = {
            icon: "icons/settings.png", text: "Settings", link: "Settings",
            tooltip: "Add a new food item or supplier in the system", color: buttonColor
        }
        const purchase = {
            icon: "icons/purchase.png",
            text: "Purchase Order",
            link: "PurchaseOrder",
            tooltip: "Place and print purchase order",
            color: buttonColor
        }
        const bills = {
            icon: "icons/bill.png", text: "Student Billing", tooltip: "Student billing portal", color: buttonColor
        }
        return (
            <div className="NavBar">
                <Style scopeSelector=".NavBar" rules={{
                    a: {
                        color: "white",
                        textDecoration: "none",
                        margin: "1rem"
                    },
                    'a:hover': {
                        color: "white",
                        textDecoration: "none"
                    },
                    'a:visited': {
                        color: "white"
                    }

                }}>

                </Style>
                <div style={{ "padding": "1rem", "fontSize": "18px" }}>
                    <span><Image src="icons/gik.png" width="150rem" height="150rem" responsive></Image></span>
                    <div style={{ "marginTop": "0.5rem" }}>
                        <Link to="/Home">GIKI Central Mess</Link>
                    </div>
                </div>
                <Row style={{ "padding": "1rem", "fontSize": "16px", "marginTop": "1rem" }}>
                    <NavBarButtons {...itemsAvailable} />
                    <NavBarButtons {...demand} />
                    <NavBarButtons {...stockOut} />
                    <NavBarButtons {...stockIn} />
                    <NavBarButtons {...purchase} />
                    <NavBarButtons {...vouchers} />
                    <NavBarButtons {...bills} />
                    <NavBarButtons {...settings} />

                </Row>


            </div>

        );
    }
}

export default NavBar

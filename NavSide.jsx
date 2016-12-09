import React from "react"
import {Button} from "react-bootstrap"
import {Row,Col,Image} from "react-bootstrap"
import NavBarButtons from "./NavBarButtons.jsx"
import {Link} from "react-router"
import {Style} from "radium"
class NavBar extends React.Component {
  render() {
      return(
        <div className="NavBar">
          <Style scopeSelector=".NavBar" rules={{
              a:{
                color:"white",
                textDecoration :"none",
                margin:"1rem"
              },
              'a:hover':{
                color:"white",
                textDecoration:"none"
              },
              'a:visited':{
                color:"white"
              }

            }}>

          </Style>
          <div style={{"padding":"1rem","fontSize":"18px"}}>
          <span><Image src="icons/gik.png" width="150rem" height="150rem" responsive></Image></span>
          <div style={{"marginTop":"0.5rem"}}>
            <Link to="/">GIKI Central Mess</Link>
         </div>
            </div>
          <Row style={{"padding":"1rem","fontSize":"16px","marginTop":"1rem"}}>
            <NavBarButtons icon="icons/stock out.png" text="Stock Out" link="StockOut"/>
            <NavBarButtons icon="icons/stock in.png" text="Stock In" link="StockIn"/>
            <NavBarButtons icon="icons/payment.png" text="Payment Vouchers"/>
            <NavBarButtons icon="icons/bill.png" text="Student Billing"/>
            <NavBarButtons icon="icons/purchase.png" text="Purchase Order"/>
            <NavBarButtons icon="icons/demand.png" text="Demand Items"/>
          </Row>


      </div>

  );
  }
}

export default NavBar

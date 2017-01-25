import React from "react"
import Radium , {Style} from "radium"
var style_head = {
  "backgroundColor":"#bdc3c7",
  "height": "4rem",
  "position":"relative"
}
class Header extends React.Component {
  render() {
    return(

      <div style={style_head}>
        <div style={{"float":"right", "margin":"1rem"}}>
          <form method="get" style={{"padding":"0.5rem","transform":"translate(0,-20%)"}}>
            <input style={{"borderRadius":"0.5rem","border":"None","padding":"0.2rem","width":"25rem"}} type="text" placeholder="Enter Purchase Order# / Payment Voucher #"/>
            <button style={{"width":"3rem","marginLeft":"0.2rem","padding":"0.2rem","border":"none","backgroundColor":"white","borderRadius":"0.5rem"}}>
              <img src="icons/search.png" width="16px" height="16px"></img>
            </button>
          </form>
            <span></span><a>Log Out </a>
        </div>
      </div>
    )
  }
}
export default Header

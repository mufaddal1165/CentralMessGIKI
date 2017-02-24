import React from "react"
import Radium, {Style} from "radium"
class Header extends React.Component {
    render() {
      var style_head = {
          "backgroundColor": this.props.color,
          "height": "4rem",
          "position": "relative"
      }

        return (

            <div style={style_head}>
                <div style={{"float": "right", "margin": "1rem"}}>
                    <form method="get" style={{"padding": "0.5rem", "transform": "translate(0,-20%)"}}>
                        <input
                            style={{"borderRadius": "0.5rem", "border": "None", "padding": "0.2rem", "width": "25rem"}}
                            type="text" placeholder="Enter Purchase Order# / Payment Voucher #"/>
                        <button style={{
                            "width": "3rem",
                            "marginLeft": "0.2rem",
                            "padding": "0.2rem",
                            "border": "none",
                            "backgroundColor": "white",
                            "borderRadius": "0.5rem"
                        }}>
                            <img src="icons/search.png" width="16px" height="16px"></img>
                        </button>
                    </form>

                </div>
            </div>
        )
    }
}
export default Header

import React, {PropTypes} from 'react';
import Radium from "radium";
import {Link} from "react-router"
import {Style} from "radium"
import {OverlayTrigger,Tooltip} from 'react-bootstrap'
var styles = {

    "padding": "1rem",
    ":hover": {
        "backgroundColor": "#34495e",
        "cursor": "default"
    }

}

class NavBarButtons extends React.Component {

    render() {
      const tooltip = (<Tooltip id={'tooltip_'+this.props.text}>{this.props.tooltip}</Tooltip>)
        return (
            <div>
              <OverlayTrigger placement='right' overlay={tooltip}>
                <div className="button" style={styles}>
                    <span><img src={this.props.icon} width="16px" height="20px"></img></span><Link
                    to={this.props.link}>{this.props.text}</Link>
                </div>
                </OverlayTrigger>
            </div>
        );
    }
}


export default Radium(NavBarButtons)

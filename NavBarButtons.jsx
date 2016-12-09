import React, {PropTypes} from 'react';
import Radium from "radium";
import {Link} from "react-router"
import {Style} from "radium"
var styles = {

  "padding":"1rem",
  ":hover":{
    "backgroundColor":"#34495e",
    "cursor":"default"
  }

}

class NavBarButtons extends React.Component {

  render() {
    return (
      <div>

      <div className="button" style={styles} >
        <span><img src={this.props.icon} width="16px" height="20px"></img></span><Link to={this.props.link}>{this.props.text}</Link>
      </div>
      </div>
    );
  }
}


export default Radium(NavBarButtons)

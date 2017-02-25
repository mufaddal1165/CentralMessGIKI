import React, {PropTypes} from 'react';
import Template from '../components/Template.jsx'
import {Col,Row} from 'react-bootstrap'
import Tile from '../components/Tile.jsx'
class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Template>
        <Col sm={2}></Col>
        <Col sm={8}>
          <h2>Settings</h2>
          <Row>
            <Col sm={4}>
            <Tile img='icons/add-button.png'/>
            </Col>
            <Col sm={4} img='icons/add-button.png'>
            <Tile/>
            </Col>
          </Row>
        </Col>
        <Col sm={2}></Col>
      </Template>
    </div>);
  }
}

Settings.propTypes = {
};

export default Settings

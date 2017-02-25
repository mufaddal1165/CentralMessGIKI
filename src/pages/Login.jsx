import React from "react"
import {Button, HelpBlock, ControlLabel, Row, Col, Table, CheckBox, Form, FormControl, FormGroup} from "react-bootstrap"
import {Style} from 'radium'
import './Login.css'
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <div className='header'>
            <Style scopeSelector='.header' rules={{
                'h2,h4':{
                  textAlign:'center',

                },
                  marginTop:'10rem',

              }}></Style>
          <h2>Central Mess</h2>
          <h4>Ghulam Ishaq Khan Institute of Engineering Sciences and Technology</h4>
          </div>
          <div className='form-container'>
            <Style scopeSelector='.form-container' rules={{
                form:{
                  width:'50%',
                  margin:'auto'
                },
                button:{
                  backgroundColor:'teal',
                  color:'white',
                  marginTop:'0.5rem',
                  fontSize:'16px'
                },
                'button:hover':{
                  backgroundColor:'#009688'
                },
                label:{
                  margin:'0.5rem'
                }
              }}></Style>
          <form className='form-group'>
            <label>User Name</label>
            <input type='text' className='form-control'></input>
            <label>Password</label>
            <input type='password' className='form-control'></input>
            <button className='form-control'>SUBMIT</button>
          </form>
          </div>
      </Col>
        <Col sm={3}></Col>
      </Row>
    </div>);
  }
}

export default Login

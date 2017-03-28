import React from "react"
import { Button, HelpBlock, ControlLabel, Row, Col, Table, CheckBox, Form, FormControl, FormGroup } from "react-bootstrap"
import { Style } from 'radium'
import './Login.css'
import axios from 'axios'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ' ',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {

    // axios.post(`https://tranquil-bastion-28756.herokuapp.com/login`, {
    //   usename: this.state.user,
    //   password: this.state.password
    // }).then(response => alert('login',response))
    e.preventDefault()
    this.props.history.push('/Home')

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (<div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <div className='header'>
            <Style scopeSelector='.header' rules={{
              'h2,h4': {
                textAlign: 'center',

              },
              marginTop: '10rem',

            }}></Style>
            <h2>Central Mess</h2>
            <h4>Ghulam Ishaq Khan Institute of Engineering Sciences and Technology</h4>
          </div>
          <div className='form-container'>
            <Style scopeSelector='.form-container' rules={{
              form: {
                width: '50%',
                margin: 'auto'
              },
              button: {
                backgroundColor: 'teal',
                color: 'white',
                marginTop: '0.5rem',
                fontSize: '16px'
              },
              'button:hover': {
                backgroundColor: '#009688'
              },
              label: {
                margin: '0.5rem'
              }
            }}></Style>
            <form className='form-group' method="post" onSubmit={this.handleSubmit}>
              <label>User Name</label>
              <input name="user" type='text' onChange={this.handleChange} value={this.state.user} className='form-control'></input>
              <label>Password</label>
              <input name="password" type='password' onChange={this.handleChange} value={this.state.password} className='form-control'></input>
              <button className='form-control' type="submit">SUBMIT</button>
            </form>
          </div>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </div>);
  }
}

export default Login

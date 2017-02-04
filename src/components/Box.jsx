import React from 'react';
import Radium from 'radium'
import {Style} from "radium"
import {Col, Row, Table} from "react-bootstrap"
import {connect} from "react-redux"
import axios from "axios"

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          headings:[]
        }
    }

    componentWillMount() {
      var keys = []
      var itemList = this.props.stock.toJS()
      for (var key in this.props.stock.toJS()[0]){
        keys.push(key)
        console.log(key)
      }
      console.log(keys)
      this.setState ({
        headings:keys,
        itemList:itemList
      })
    }

    render() {
        const headingStrap = this.props.theme['color']
        const icon = this.props.theme['icon']
        const background = this.props.theme['background']
        return <div className="Box">
          <Style scopeSelector=".Box" rules={{
              h4:{
                color:'white',
                textAlign:'center'

              },

              backgroundColor:background,
              height:"20rem",
              borderRadius:'1rem',
              

            }}>

          </Style>
          <div className="headingStrap">
            <Style scopeSelector=".headingStrap" rules={{
                backgroundColor:headingStrap,
                padding:'0.3rem',
                borderRadius:'1rem 1rem 0  0'
              }}>

            </Style>
          <h4>
            Low in Stock
          </h4>
          </div>
          <div className="boxBody">
            <p></p>
            <Col sm={2}></Col>
            <Col sm={8}>
            <Table responsive>
              <thead>
                {
                  this.state.headings.map(heading=>{
                    return (<th key={heading}>{heading}</th>)
                  })
                }
              </thead>
              <tbody>
                {
                  this.state.itemList.map(item=>{
                    return <tr key={'tr'+item.Item}>
                      {this.state.headings.map(heading=>{
                        return <td key={'td'+item[heading]}>{item[heading]}</td>
                      })}
                    </tr>
                  })
                }
              </tbody>
            </Table>
            </Col>
            <Col sm={2}></Col>

          </div>
        </div>
    }
}
export default Box;

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
        const seeMore = (<h6><a style={{'color':headingStrap}}>See More</a></h6>)
        const className = 'Box' + this.props.BoxID
        const icon = this.props.theme['icon']
        const background = this.props.theme['background']
        return <div className={className}>
          <Style scopeSelector={'.'+className} rules={{
              h4:{
                color:'white',
                textAlign:'center'

              },
              h6:{
                textAlign:'center',
                padding:'0rem',
                margin:'0rem'
              },
              backgroundColor:background,
              height:"22rem",
              borderRadius:'0.6rem',
              '.table':{
                textAlign:'center',
                fontSize:'13px'
              },
              th:{
                textAlign:'center'
              },
              a:{
                color:'black'
              }

            }}>

          </Style>
          <div className={`headingStrap${className}`}>
            <Style scopeSelector={`.headingStrap${className}`} rules={{
                backgroundColor:headingStrap,
                padding:'0.3rem',
                borderRadius:'0.6rem 0.6rem 0  0'
              }}>

            </Style>
          <h4>
            {this.props.heading}
          </h4>
          </div>
          <div className="boxBody">
            <p></p>
            <Col sm={1}></Col>
            <Col sm={10}>
            <Table bsClass='table' responsive>
              <thead>
                {
                  this.state.headings.map(heading=>{
                    return (<th key={heading}>{heading}</th>)
                  })
                }
              </thead>
              <tbody>
                {
                  this.state.itemList.slice(0,3).map(item=>{
                    return <tr key={'tr'+item.Item}>
                      {this.state.headings.map(heading=>{
                        return <td key={'td'+item[heading]}>{item[heading]}</td>
                      })}
                    </tr>
                  })
                }
              </tbody>
            </Table>
            {this.state.itemList.length > 3 && seeMore}

            </Col>
            <Col sm={1}></Col>

          </div>
        </div>
    }
}
export default Box;

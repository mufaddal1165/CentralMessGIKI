import React from 'react';
import Radium from 'radium'
import {Style} from "radium"
import {Col,Row,Table} from "react-bootstrap"
import axios from "axios"
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Items:new Array(),
      Keys:new Array(),
      url:this.props.url,
    };
  }
  componentDidMount() {
    var _this = this;
    this.serverRequest = axios.get(this.state.url).then(
      function(result){
        var keys = [];
        for (var key in result.data[0]){
          keys.push(key);
          console.log(key);
        }
         _this.setState(
        {
          Items:result.data,
          Keys:keys,

        }

      );

    }
  )
  }
  render() {
    var _keys = this.state.Keys;
    var _items = this.state.Items;
    var classn = "."+this.props.classn;

    return <div>

      <Style
        scopeSelector = {classn}
        rules={{
          boxShadow:"1px 1px 1px #000",
          overflow:"hidden",
          backgroundColor:this.props.background,

          h3:{
            color:this.props.headingColor,
            fontWeight:"bold"
          },
          ".box":{
            height:"100%"
          },
          table:{
            marginRight:"1rem",
            fontSize : "12px"

          },
          a:{
            color:this.props.headingColor,
            cursor:"default"
          }
        }}>

      </Style>

      <div className = {this.props.classn}>

        <Row style={{"padding":"1.5rem"}}>

          <Col sm={3}>

            <img
              src={this.props.img}
              height="50rem"
              width="50rem">
            </img>

          </Col>

          <Col sm={9}>

            <h3>

              {this.props.tableHeading}
            </h3>

          </Col>

        </Row>

        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Table responsive>
              <thead>
                <tr>
                  {this.state.Keys.map(function(result){
                    return <th key={result}>{result}</th>
                  })}
                  <th>

                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.Items.map(function(result,i){
                  return (
                    <tr >
                      {_keys.map(function(col,j){

                        return <td key={result[col]}>{result[col]}</td>

                      })}

                    </tr>
                  )
                })}
              </tbody>
            </Table>
        </Col>
        <Col sm={1}>
        </Col>
        </Row>

      </div>

    </div>
  }
}
export default Radium(Box);

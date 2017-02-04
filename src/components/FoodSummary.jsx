import React, {PropTypes} from 'react';
import {Row,Col,Table} from 'react-bootstrap'
import {Style} from 'radium'

export default class FoodSummary extends React.Component {
  constructor(props) {
    super(props);
  }
componentWillMount(){

}
  render() {
    const foodItems  = this.props.foodItems
    return (<div>
      <Style scopeSelector='.table' rules={{
          backgroundColor:'white',
          th:{
            color:'white',
            backgroundColor:'#26A69A'
          }


        }}></Style>
      <Table bsClass='table' responsive>
        <thead>
          <tr>
            <th>
              S.No

            </th>
            <th>
              Name
            </th>
            <th>
              Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          {
            foodItems.map((item,i)=>{
              return <tr key={item.Name+i}>
                <td>{i+1}</td>
                <td>{item.Name}</td>
                <td>{item.Quantity} {item.Unit}</td>
              </tr>
            })
          }
        </tbody>
      </Table>

    </div>);
  }
}

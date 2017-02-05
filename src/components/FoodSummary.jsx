import React, {PropTypes} from 'react';
import {Row,Col,Table} from 'react-bootstrap'
import {Style} from 'radium'
import {Link} from 'react-router'
export default class FoodSummary extends React.Component {
  constructor(props) {
    super(props);
  }
componentWillMount(){

}
  render() {
    const foodItems  = this.props.foodItems
    const qtyColor = 'red'
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
              Last Drawn
            </th>
            <th>
              Last Delivery
            </th>
            <th>
              Quantity
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            foodItems.map((item,i)=>{
              return <tr key={item.Name+i}>
                <td>{i+1}</td>
                <td>{item.Name}</td>
                <td>{item.Drawn}</td>
                <td>{item.Delivery}</td>
                <td style={item.Min > item.Quantity?{'color':qtyColor}:{}}>{item.Quantity} {item.Unit}</td>
                <td><Link to={`PurchaseOrder/${item.Name}`}>Order</Link></td>
              </tr>
            })
          }
        </tbody>
      </Table>

    </div>);
  }
}

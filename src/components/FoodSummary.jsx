import React, { PropTypes } from 'react';
import { Row, Col, Table } from 'react-bootstrap'
import { Style } from 'radium'
import { Link } from 'react-router'
import moment from 'moment'
export default class FoodSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sel_count: 0
    }
  }
  componentWillMount() {

  }
  checkBoxChange(name, seq) {
    // alert('workds')
    let cnt = this.state.sel_count
    if (document.getElementById(name + seq + 'checkbox').checked == false) {
      cnt -= 1
    }
    else {
      cnt += 1
    }
    this.setState({
      sel_count: cnt
    })
  }
  addToparams(itemName){
    console.log(itemName)
  }
  render() {
    const foodItems = this.props.foodItems
    let count = (this.state.sel_count) ? <span>({this.state.sel_count})</span> : null
    const qtyColor = 'red'
    return (<div>
      <Style scopeSelector='.table' rules={{
        backgroundColor: 'white',
        th: {
          color: 'white',
          backgroundColor: '#26A69A'
        }


      }}></Style>
      <Table bsClass='table' responsive>
        <thead>
          <tr>
            <th></th>
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
              Order all {count}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            foodItems.map((item, i) => {
              return <tr key={item.name + i}>
                <td><form><input key={item.name + i + 'checkbox'} id={item.name + i + 'checkbox'} onChange={() => this.checkBoxChange(item.name, i)} type='checkbox'></input></form></td>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{moment(item.lastDrawingDate).format('Do MMM YYYY')}</td>
                <td>{moment(item.lastEntryDate).format('Do MMM YYYY')}</td>
                <td style={item.minReOrderLimit > item.quantity ? { 'color': qtyColor } : {}}>{item.quantity} {item.unit}</td>
                <td onClick={()=>(this.props.paramhandle(item))}><Link to={`PurchaseOrder`}>Order</Link></td>
              </tr>
            })
          }
        </tbody>
      </Table>

    </div>);
  }
}

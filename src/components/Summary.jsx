import React, {PropTypes} from 'react';
import Radium,{Style} from 'radium'

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItemList(){
    return this.props.List.map((item)=>{
      return (<li key={item.foodItem.FoodId+item.foodItem.Name}>{item.foodItem.Name}  {item.qty} {item.foodItem.Unit} </li>

            )
})
  }
  render() {

    return (<div className="Summary">
    <Style scopeSelector=".Summary" rules={{
          h3:{
            textAlign:"Center",
            color:"white"

          },
          padding:"0.5rem",
          margin:"2rem",
          backgroundColor : "#95a5a6"
      }}>

    </Style>
      <h3>{this.props.heading}</h3>
      <ul>
        {this.renderItemList()}
      </ul>

    </div>);
  }
}

Summary.propTypes = {
};

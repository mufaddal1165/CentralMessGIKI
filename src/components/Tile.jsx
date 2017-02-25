import React, {PropTypes} from 'react';
import {Style} from 'radium'

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover : false
    }
  }
  componentDidMount() {

  }
  render() {
    return (<div className='tile'>
    <Style scopeSelector='.tile' rules={{
        backgroundColor:'#263238',
        color:'white',
        width:'15rem',
        padding:'1rem',
        height:'15rem',
        opacity:'0.8',
        // verticalAlign:'middle',
        img:{
        'margin':'auto'
      }
      }}
      ></Style>
    <div>
    <img src={this.props.img} width='100' height='100'/>
    </div>
    </div>
  );
  }
}

export default Tile

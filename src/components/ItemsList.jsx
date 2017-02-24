import React, {PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap'
import {Style} from 'radium'
// import iconCross from 'file!../../icons/cross.png'

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: true
        }
    }

    render() {
        const cross = (
            <img src='icons/cross.png' key={this.props.serial + "cross"} width="9rem" height="9rem" onClick={() => {
                this.props.crosshandle(this.props.serial)
            }}></img>)

        return (<div className="ItemsListRow" onMouseLeave={() => {
            this.setState({hover: true});
            console.log('Leave')
        }} onMouseEnter={() => {
            this.setState({hover: false});
            console.log('Entered ' + this.props.serial)
        }}>
            <Style scopeSelector=".ItemsListRow" rules={{
                padding: "0.3rem",
                img: {
                    opacity: 0.5
                },
                "img:hover": {
                    opacity: 1
                },
                margin:"0.2rem",
                borderRadius:"0.5rem",
                backgroundColor: "white",
                fontWeight: "normal",
                padding: "0.7rem",
                ":hover": {
                    fontWeight: "bold",
                }
            }}>

            </Style>

            <Row key={"row" + this.props.serial}>
                <Col sm={5} key={"colname" + this.props.serial}>{this.props.itemName}</Col>
                <Col sm={2} key={"colqty" + this.props.serial}>{this.props.qty}</Col>
                <Col sm={3} key={'colunit' + this.props.serial}>{this.props.unit}</Col>
                <Col sm={2} key={"colx" + this.props.serial}>{this.state.hover || cross}</Col>
            </Row>
        </div>);
    }
}

ItemsList.propTypes = {};
export default ItemsList

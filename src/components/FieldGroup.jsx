import React from 'react';
import {Row, Col, Table, Form, FormControl, FormGroup, ControlLabel, HelpBlock} from "react-bootstrap"


class FieldGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <FormGroup controlId={this.props.Id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl componentClass={this.props.componentClass} type={this.props.type}
                             onChange={this.props.onChange}
                             width={this.props.width}
                >
                    {this.props.children}
                </FormControl>
                <HelpBlock>{this.props.help}</HelpBlock>
            </FormGroup>
        )
    }
}


export default FieldGroup

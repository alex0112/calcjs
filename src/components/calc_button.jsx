import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export default class CalcButton extends Component {

    constructor(props) {
	super(props);
    }
    
    render() {
	return(
	    <Button>{this.props.number}</Button>
	);
    }
}

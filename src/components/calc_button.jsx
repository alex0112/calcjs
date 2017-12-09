import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export default class CalcButton extends Component {
    render() {
	return(

	    <Button><span className="number">{this.props.number}</span></Button>
	);
    }
}

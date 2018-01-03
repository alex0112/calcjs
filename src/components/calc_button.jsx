import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export default class CalcButton extends Component {
    render() {
	return(
	    <Button
	      bsStyle={this.props.type} // TODO: Find the proper way to style bootstrap buttons with custom classes. (https://github.com/alex0112/calcjs/issues/4)
	      onClick={() => this.props.updateScreen(this.props.number)}>
	      <span className="number">{this.props.number}</span>
	    </Button>
	);
    }
}

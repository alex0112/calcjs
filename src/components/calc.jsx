import React, { Component } from 'react';

import Display from './display';
import ButtonGrid from'./button_grid';

export default class Calc extends Component {

    constructor(props) {
	super(props);

	this.state = {
	    total: 0,
	    current_operand: ''
	};
	console.log(this.state);
	this.updateScreen = this.updateScreen.bind(this);
    }

    multiply(a, b) {
	return a * b;
    }

    divide(a, b) {
	return a / b;
    }
    
    add(a, b) {
	return a + b;
    }

    subtract(a, b) {
	return a - b;
    }

    updateScreen(num) {
	console.log('this is updateScreen');
	this.setState({ current_operand: num });
    }
        
    render() {
	return(
	    <div id="calc-body">
	      <Display currentVal={this.state.current_operand} />
	      <ButtonGrid updateScreen={this.updateScreen} />
	    </div>
	);
    }
}

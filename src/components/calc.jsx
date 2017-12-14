import React, { Component } from 'react';

import Display from './display';
import ButtonGrid from'./button_grid';

import Expr from '../utils/expr';

export default class Calc extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    total: 0,
	    current_num: 0,
	    expr: new Expr()
	};
	this.updateScreen = this.updateScreen.bind(this);
    }

    updateScreen(val) {
	this.setState({ current_operand: val });
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

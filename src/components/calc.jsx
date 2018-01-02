import React, { Component } from 'react';

import Display from './display';
import ButtonGrid from'./button_grid';

import Expr from '../utils/expr';

export default class Calc extends Component {
    constructor(props) {
	super(props);
	
	 this.state = {
	    current_num: 0,
	    expr: new Expr()
	};
	this.updateScreen = this.updateScreen.bind(this);
    }
    
    updateScreen(val) {
	let expr = this.state.expr;
	const operator_pattern = /[+\-/*]{1}/;

	switch (val) {
	case 'C':
	    this.setState({
		current_num: 0,
		expr: new Expr()
	    });
	    break;

	case '=':
	    if (expr.a && expr.b) {
		let result = expr.eval();
		
		this.setState({
			current_num: result
		    });
	    }
	    break;
	    case (String(val).match(operator_pattern) || {}).input: // i.e. is it an operator? (https://stackoverflow.com/a/18881169)
	    console.log('matched an operator: ', val);
	    expr.operator = val;
	    this.setState({
		expr: expr
	    });
	    console.log('matched an operator: ', val);
	    break;

	default: 
	    if (this.state.expr.operator === null) {
		expr.a = val;
		this.setState({
		    expr: expr,
		    current_num: expr.a
		});
	    }
	    else {
		expr.b = val;
		this.setState({
		    expr: expr,
		    current_num: expr.b
		});
	    }
	    break;
	}
    }

    render() {
	return(
	    <div id="calc-body">
	      <Display currentNum={this.state.current_num} />
	      <ButtonGrid updateScreen={this.updateScreen} />
	    </div>
	);
    }
}

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
	// TODO:  Abstract this function. Put the logic somewhere else.
	// (https://github.com/alex0112/calcjs/issues/2)
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
	    expr.operator = val;
	    if (expr.a && expr.b) {
		expr = new Expr(val, this.state.current_num, null);
	    }
	    
	    this.setState({
		expr: expr
	    });
	    break;

	case '%':
	    break;

	case '\u00B1':
	    console.log('here');
	    console.log(this.state.current_num);
	    let opposite = -this.state.current_num;
	    console.log(opposite);
	    this.setState({
		current_num: opposite
	    });
	    break;
	    
	default: 
	    // TODO: Give numbers their own case to avoid them being lumped in with other undefined behaviours when they happen.
	    // (https://github.com/alex0112/calcjs/issues/1)
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

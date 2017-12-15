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
	console.log("updateScreen(): ", val);
	console.log("Before:", this.state.current_num);
	if (val === 'C') {
	    this.setState({
		current_num: 0,
		expr: new Expr()
	    });
	}

	else if (val === '=') {
	    if (expr.a && expr.b) {
		const result = expr.eval();
		this.setState({
		    current_num: result,
		});
	    }
	}
	
	else if (val === 'u') {
	    // do nothing.
	}
	
	else if (val ===~ /\+-\/\\*/) { // i.e. is it an operand?
	    console.log("Operand:", val);
	    expr.operand = val;
	    this.setState({
		expr: expr
	    });

	}
	
	else {
	    if (this.state.expr.operand === null) {
		expr.a = val;
		this.setState({
		    expr: expr,
		    current_num: expr.a
		});
	    }
	    else {
		console.log('setting b');
		expr.b = val;
		this.setState({
		    expr: expr,
		    current_num: expr.b
		});
	    }
	}
	console.log("After:", this.state.current_num);
    }
    
    render() {
	console.log("foo", this.state.current_num);
	return(
	    <div id="calc-body">
	      <Display currentNum={this.state.current_num} />
	      <ButtonGrid updateScreen={this.updateScreen} />
	    </div>
	);
    }
}

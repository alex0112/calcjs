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
	if (val ===~ /\+-\/\\*/) { // i.e. is it an operand?
	    
	}
	else {
	    if (this.state.expr.operand == null) {
		expr.a = val;
		this.setState({ current_num: expr.a });
	    }
	    else {
		expr.b = val;
		this.setState({ current_num: expr.b });
	    }
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

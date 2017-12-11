import React, {Component} from 'react';

export default class Display extends Component {
    constructor() {
	super();
	this.state = { current_calculation: 0 };
    }
    
    render() {
	return(
	    <div id="display">
	      <span className="number">{this.props.currentVal}</span>
	    </div>
	);
    }    
}

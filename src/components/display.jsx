import React, {Component} from 'react';

export default class Display extends Component {
    render() {
	return(
	    <div id="display">
	      <span id="number">{this.props.currentNum}</span>
	    </div>
	);
    }    
}

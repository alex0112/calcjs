import React, { Component } from 'react';

import Display from './display';
import ButtonGrid from'./button_grid';

export default class Calc extends Component {
    render() {
	return(
	    <div id="calc-body">
	      <Display />
	      <ButtonGrid/>
	    </div>
	);
    }
}

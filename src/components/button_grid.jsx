import React from 'react';
import CalcButton from './calc_button';
import {Grid, Row, Col} from 'react-bootstrap';

const ButtonGrid = () => {
    return(
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
	    return(
		<CalcButton number={n}/>
	    );
	})
    );
};

export default ButtonGrid;

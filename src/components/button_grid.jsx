import React from 'react';
import CalcButton from './calc_button';
import {Grid, Row, Col} from 'react-bootstrap';

const ButtonGrid = () => {
    console.log('This is the button grid');
    const buttons = () => {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];/*.map((n) => {
	    return(
		<CalcButton number={n}/>
	    );
	});*/
    };
    
    return(
	<Grid>
	  <Row className="show-grid">
	    <Col xs={4}> <CalcButton number={7}/></Col>
	    <Col xs={4}> <CalcButton number={8}/></Col>
	    <Col xs={4}> <CalcButton number={9}/></Col>
	  </Row>
	  <Row className="show-grid">
	    <Col xs={4}> <CalcButton number={4}/></Col>
	    <Col xs={4}> <CalcButton number={5}/></Col>
	    <Col xs={4}> <CalcButton number={6}/></Col>
	  </Row>
	  <Row className="show-grid">
	    <Col xs={4} md={4}> <CalcButton number={1}/></Col>
	    <Col xs={4} md={4}> <CalcButton number={2}/></Col>
	    <Col xs={4} md={4}> <CalcButton number={3}/></Col>
	  </Row>
	</Grid>
    );
};

export default ButtonGrid;

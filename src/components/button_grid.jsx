import React, {Component} from 'react';
import CalcButton from './calc_button';
import {Grid, Row, Col} from 'react-bootstrap';

export default class ButtonGrid extends Component {
    
    render() {
	console.log(this.props);
	return(
	    <Grid>
	      <Row className="show-grid">
		<Col xs={4}> <CalcButton updateScreen={this.props.updateScreen} number={7}/></Col>

		<Col xs={4}> <CalcButton number={9}/></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={4}> <CalcButton number={4} /></Col>
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
    }
}

import React, {Component} from 'react';
import CalcButton from './calc_button';
import {Grid, Row, Col} from 'react-bootstrap';

export default class ButtonGrid extends Component {
    render() {
	return(
	    <Grid>
	      <Row className="show-grid">
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen} number={'C'} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen} number={'u'} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'u'} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'+'} /></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen} number={7} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen} number={8} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={9} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'-'} /></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={4} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={5} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={6} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'/'} /></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={1} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={2} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={3} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'*'} /></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={0} /></Col>
		<Col xs={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'='} /></Col>
	      </Row>
	    </Grid>
	);
    }
}

import React, {Component} from 'react';
import CalcButton from './calc_button';
import {Grid, Row, Col} from 'react-bootstrap';

export default class ButtonGrid extends Component {
    render() {
	return(
	    <Grid>
	      <Row className="show-grid">
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen} number={'C'} type="special clear-button" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen} number={'\u00B1'} type="special" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'%'} type="special" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'+'} type="special" /></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen} number={7} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen} number={8} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={9} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'-'} type="special" /></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={4} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={5} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={6} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'/'} type="special"/></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={1} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={2} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={3} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'*'} type="special" /></Col>
	      </Row>
	      <Row className="show-grid">
		<Col xs={6} md={6} lg={6}> <CalcButton updateScreen={this.props.updateScreen}  number={0} type="zero" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'.'} type="number" /></Col>
		<Col xs={3} md={3} lg={3}> <CalcButton updateScreen={this.props.updateScreen}  number={'='} type="special" /></Col>
	      </Row>
	    </Grid>
	);
    }
}

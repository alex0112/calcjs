import React, { Component } from 'react';
import './App.css';

import Calc from './components/calc';
import Display from './components/display';

class App extends Component {
    render() {
	return (
	    <div className="App">
		<Display />
		<Calc />
	    </div>
	);
    }
}

export default App;

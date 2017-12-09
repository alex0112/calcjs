import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Calc from './components/calc';

class App extends Component {
    render() {
	return (
	    <div className="App">
	      <Calc />
	    </div>
	);
    }
}

export default App;

import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import Slider from './components/Slider.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

require('./assets/css/main.scss');

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/client'>Client</Link>
          <p> Hello React Project</p>
          <AwesomeComponent />
          <Route path="/client" component={ Slider } />
        </div>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));

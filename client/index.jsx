import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import Slider from './components/Slider.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React Projects</p>
        <AwesomeComponent />
        <Slider />
        <Slider />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

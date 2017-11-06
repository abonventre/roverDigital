import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Slider from './Slider.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React Project</p>
        <AwesomeComponent />
        <Slider />
        <Slider />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

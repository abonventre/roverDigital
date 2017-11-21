import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Slider from './Slider.jsx';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <p> Hello React Project</p>
          <AwesomeComponent />
          <Slider />
        </div>
      </BrowserRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));

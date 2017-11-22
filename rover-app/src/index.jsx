import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import Slider from './components/Slider.jsx';
import Playlist from './components/Playlist.jsx';
import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


console.log(globalConfig);
require('./assets/css/main.scss');

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route path="/client" component={ Slider } />
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/" render={ ()=> {
            switch(globalConfig.mode) {
              case "client":
                return <Redirect to="/client" />
              break;
              case "server":
                return <Redirect to="/dashboard" />
              break;
              default:
                return <Redirect to="/setup" />
            }
          } } />
        </div>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));

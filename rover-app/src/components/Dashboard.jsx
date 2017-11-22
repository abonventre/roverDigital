import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';
import Playlist from './Playlist.jsx';
import { Route, Link } from 'react-router-dom';

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard</p>
      <Link to={`${match.url}/playlist`}>
        Playlist
      </Link>
      <Link to={`${match.url}/playlist`}>
        Playlist
      </Link>
      <AwesomeComponent/>
      <Link to='/client'>View Client</Link>
      <Route path={ `${match.url}/playlist` } component={ Playlist }/>
    </div>
  )
}

export default Dashboard;

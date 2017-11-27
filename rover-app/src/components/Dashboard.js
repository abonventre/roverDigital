import React from 'react';
import AwesomeComponent from './AwesomeComponent';
import Playlist from './Playlist';
import Client from './Client';
import Slide from './Slide';
import User from './User';
import { Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import '../assets/css/Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarToggler right="true" onClick={this.toggle} />
          <NavbarBrand tag={Link} to='/dashboard'>roverDigital</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to={`${this.props.match.url}/playlists`}>Playlists</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={`${this.props.match.url}/slides`}>Slides</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={`${this.props.match.url}/clients`}>Clients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={`${this.props.match.url}/users`}>Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={`/client`}>Client View</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/abonventre/roverDigital">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container className="main">
          <h1>Dashboard</h1>
          <p>This is the dashboard</p>
          <Route path={ `${this.props.match.url}/playlists` } component={ Playlist }/>
          <Route path={`${this.props.match.url}/slides`} component={ Slide } />
          <Route path={`${this.props.match.url}/clients`} component={ Client } />
          <Route path={`${this.props.match.url}/users`} component={ User } />
        </Container>
      </div>
    )
  }
}

export default Dashboard;

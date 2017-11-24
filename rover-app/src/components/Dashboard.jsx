import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';
import Playlist from './Playlist.jsx';
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
        <Container>
          <Navbar color="primary" dark expand="md">
            <NavbarToggler right="true" onClick={this.toggle} />
            <NavbarBrand tag={Link} to='/dashboard'>roverDigital</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to={`${this.props.match.url}/playlist`}>Playlists</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to={`${this.props.match.url}/playlist`}>Slides</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to={`${this.props.match.url}/playlist`}>Clients</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to={`${this.props.match.url}/playlist`}>Users</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink target="_blank" href="https://github.com/abonventre/roverDigital">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <h1>Dashboard</h1>
          <p>This is the dashboard</p>
          <Link to={`${this.props.match.url}/playlist`}>
            Playlist
          </Link>
          <Link to={`${this.props.match.url}/playlist`}>
            Playlist
          </Link>
          <AwesomeComponent/>
          <Link to='/client'>View Client</Link>
          <Route path={ `${this.props.match.url}/playlist` } component={ Playlist }/>
          <Button
            tag="a"
            color="success"
            size="large"
            href="http://reactstrap.github.io"
            target="_blank"
          >
                  View Reactstrap Docs
          </Button>
        </Container>
      </div>
    )
  }
}

export default Dashboard;

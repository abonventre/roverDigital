import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playlistsFetchData } from '../actions/playlists';
import Slider from '../components/Slider';
import Dashboard from '../components/Dashboard';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:3000/api/playlist');
    }

    render () {
        console.log("Error", this.props.hasErrored);
        console.log("Loading", this.props.isLoading);
        console.log("Get", this.props.playlists);
        return (
            <Router>
            <div>
                <Route path="/client" component={ Slider } />
                <Route path="/dashboard" component={ Dashboard } />
                <Route exact path="/" render={ ()=> {
                switch(globalConfig.mode) {
                    case "client":
                    console.log('Client');
                    return <Redirect to="/client" />
                    break;
                    case "server":
                    console.log('Server');
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(playlistsFetchData(url))
    };
};

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists,
        hasErrored: state.playlistsHasErrored,
        isLoading: state.playlistsIsLoading
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
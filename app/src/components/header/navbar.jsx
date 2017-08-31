import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        pageView: 'landing'
    };
})

export default class NavBar extends Component {
    render() {
        // const userLoading = false;
        
        // if (!this.loggedIn()) return <Landing/>;
        // // else if (userLoading) return <Spinner />;
        // else if (this.LoggedIn()) return <Home />;
        // // else return (<Spinner />);
      return (
        <div className="container">
            <div className="navbar">
                <div className="col-md-6 col-md-6 col-sm-12">
                    <h2>NavBar</h2>
                </div>
                <div className="col-md-6 col-md-6 col-sm-12">
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>personal</li>
                        <li>projects</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

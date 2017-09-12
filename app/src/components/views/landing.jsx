import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
    return {
    };
})


export default class LandingPage extends Component {

    render() {

      let bannerBackground = 'assets/images/screenshot_banner.png';
      let backgroundStyle = {
            backgroundImage: `url(${bannerBackground})`, 
            height: 250
      };

        // const userLoading = false;
        
        // if (!this.loggedIn()) return <Landing/>;
        // // else if (userLoading) return <Spinner />;
        // else if (this.LoggedIn()) return <Home />;
        // // else return (<Spinner />);
      return (
        <div className="Landing-page">
            <h2 style={ backgroundStyle }></h2>
        </div>
        );
    }

}

import React, { Component } from 'react';
import NavBar from './header/navbar.jsx';
import { connect } from 'react-redux';
// remove once i start tracking view by state
import LandingPage from './views/landing';
import AboutPage from './views/about';
import ContactPage from './views/contact';
import ProjectsPage from './views/projects';
import MediaPage from './views/media';

@connect((store) => {
	return {
	};
})

export default class App extends Component {
	render() {
		return (
			<div className='holder-of-things'>
				<NavBar />
				<hr/>
				<LandingPage />
				<AboutPage />
				<ContactPage />
				<ProjectsPage />
				<MediaPage />
			</div>
		);
	}
}

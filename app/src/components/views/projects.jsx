import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		pageView: 'projectsPage'
	};
})


export default class ProjectsPage extends Component {

	render() {

	// let divStyle = {
	// };
		let lazyStyle = {
			'marginTop': 40
		};

		return (
			<div className='projects'>
				<div className="sixteen columns">
					<h1 className="remove-bottom" style={lazyStyle}>Works</h1>
					<h5>See what I've been up to...</h5>
					<hr />
				</div>
				<div className="ten columns">

					<div className='project space'>
						<h3>Personality Palette</h3>
						<p>A simply journal based app that relates entries to emotions and colors and visualizes past recent entries.</p>
						<p><strong>Technology used:</strong> Ruby On Rails, jQuery, d3.js, Postgresql</p>
						<a href='http://personality-palette.herokuapp.com/portfolio' target="_blank">
						</a>
					</div>

					<div className='project space'>
						<h3>CardBox_app</h3>
						<p>A collaborative project. Snap a picture of a business card and email it to the app to keep track networking contacts instead of piling up business cards.</p>
						<p><strong>Technology used:</strong> Ruby On Rails, jQuery, ajax, LinkedIn API, CloudMailIn, Postgresql</p>
						<a href='http://shielded-reef-1881.herokuapp.com/' target="_blank">
						</a>
					</div>

					<div className='project space'>
						<h3>ListTube</h3>
						<p>A simple way to share YouTubeVideos and keep track of whom you've shared with videos</p>
						<p><strong>Technology used:</strong> Ruby On Rails, YouTube API, Postgresql</p>
						<a href='http://still-headland-4174.herokuapp.com/portfolio' target="_blank">
						</a>
					</div>
				</div>
			</div>
		);
	}

}

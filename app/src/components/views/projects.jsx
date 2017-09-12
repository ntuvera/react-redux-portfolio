import React, { Component } from 'react';
// import { connect } from 'react-redux';

// @connect((store) => {
// 	return {
// 		pageView: null
// 	};
// })


export default class ProjectsPage extends Component {

	render() {

	// let divStyle = {
	// };

		return (
			<div class='projects'>
				<div class="sixteen columns">
					<h1 class="remove-bottom" style="margin-top: 40px">Works</h1>
					<h5>See what I've been up to...</h5>
					<hr />
				</div>
				<div class="ten columns">

					<div class='project space'>
						<h3>Personality Palette</h3>
						<p>A simply journal based app that relates entries to emotions and colors and visualizes past recent entries.</p>
						<p><strong>Technology used:</strong> Ruby On Rails, jQuery, d3.js, Postgresql</p>
						<a href='http://personality-palette.herokuapp.com/portfolio' target="_blank">
						</a>
					</div>

					<div class='project space'>
						<h3>CardBox_app</h3>
						<p>A collaborative project. Snap a picture of a business card and email it to the app to keep track networking contacts instead of piling up business cards.</p>
						<p><strong>Technology used:</strong> Ruby On Rails, jQuery, ajax, LinkedIn API, CloudMailIn, Postgresql</p>
						<a href='http://shielded-reef-1881.herokuapp.com/' target="_blank">
						</a>
					</div>

					<div class='project space'>
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

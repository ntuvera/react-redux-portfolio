import React, { Component } from 'react';

// import { connect } from 'react-redux';

// @connect((store) => {
//	return {
//		pageView: null
//	};
// })


export default class AboutPage extends Component {

	render() {

	// let divStyle = {
	// };

		let lazyStyle = {
			'marginTop': 40
		};

		return (
			<div className='about-me'>
				<div className="sixteen columns">
					<h3 className="remove-bottom" style={lazyStyle}>About Me</h3>
					<h5>For those who like to read...</h5>
					<hr />
				</div>
				<div className="one-third column">
					<h3>Current</h3>
					<p>Former chemist turned developer. Learning to build cool stuff and manipulate the digital world. </p>
					<br/>
				</div>

				<div className="one-third column">
					<h3> Stack </h3>
					<ul className="square">
						<li><strong>Ruby on Rails</strong>: Ruby 1.9 & 2.1</li>
						<li><strong>Javascript</strong>: jQuery, backbone, d3</li>
						<li><strong>HTML5/CSS</strong></li>
					</ul>
				</div>

				<div className="one-third column">
					<h3>Where to Next?</h3>
					<p>After Finishing General Assembly's WDi course.  I am looking for an opportunity to continue to grow and develop a fufilling career.</p>
				</div>
			</div>
		);
	}

}

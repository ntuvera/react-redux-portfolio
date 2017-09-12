import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		pageView: 'landing'
	};
})

export default class NavBar extends Component {
	render() {

		let navbarStyle = {
			
		};

		return (
			<div className="container">
				<div style={ navbarStyle }className="navbar">
					<div className="col-md-6 col-md-6 col-sm-12">
						<h2>NavBar</h2>
					</div>
					<div className="col-md-6 col-md-6 col-sm-12">
						<ul>
							<li className="nav-link">home</li>
							<li className="nav-link">about</li>
							<li className="nav-link">personal</li>
							<li className="nav-link">projects</li>
							<li className="nav-link">contact</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

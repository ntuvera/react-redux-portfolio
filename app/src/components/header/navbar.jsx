import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		pageView: store.currentPage,
	};
})

export default class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageView: 'landingPage',
		};
	}

	render() {

		// let navbarStyle = {
		// };
		let navigation = {
			'textAlign': 'right',
			'display': 'inline',
			'position': 'center',
			'marginTop': 10,
			'height': '2em',
		};

		let linkStyle = {
			'display': 'inline-block',
			'margin': 10,
			'cursor': 'default',
		};

		console.log('wtf is this sh*t?');
		console.log(`pageView: ${this.state.pageView}`);
		return (
			<div className="container">
				<div style={navigation} className="navbar">
					<div className="col-md-6 col-md-6 col-sm-12">
						<h2>Nate Tuvera</h2>
					</div>
					<div className="col-md-6 col-md-6 col-sm-12">
						<ul>
							<li style={linkStyle} className="nav-link">home</li>
							<li style={linkStyle} className="nav-link">about</li>
							<li style={linkStyle} className="nav-link">personal</li>
							<li style={linkStyle} className="nav-link">projects</li>
							<li style={linkStyle} className="nav-link">contact</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

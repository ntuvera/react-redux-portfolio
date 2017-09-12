import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		pageView: null
	};
})


export default class MediaPage extends Component {

	render() {

	// let divStyle = {
	// };

		return (
			<div className="media-page">
				<h2>media page </h2>
			</div>
		);
	}

}

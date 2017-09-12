import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		pageView: 'contactPage'
	};
})


export default class ContactPage extends Component {

	render() {

		// fix this you lazy styler ln 13, 14
		let lazyStyle = {
			'marginTop': 40
		};
		let lazyStyle2 = {
			'textAlign': 'left'
		};

		return (
			<div className='contact-me'>

				<div className="sixteen columns">
					<h1 className="remove-bottom" style={lazyStyle}></h1>
					<h5 style={lazyStyle2}>For those interested in reaching me...</h5>
					<hr />
					<ul>
						<li className='contact-icons'>
							<a href='mailto:ntuvera@gmail.com' target="_blank"><i className="fa fa-envelope fa-3x"></i>
							</a>
						</li>
						<li className='contact-icons'>
							<a href='http://www.natetuvera.com/resume.html' target="_blank"><i className="fa fa-file-word-o fa-3x"></i>
							</a>
						</li>
						<li className='contact-icons'>
							<a href='https://www.linkedin.com/pub/nathaniel-tuvera/44/356/239' target="_blank"><i className="fa fa-linkedin fa-3x"></i>
							</a>
						</li>
						<li className='contact-icons'>
							<a href='https://github.com/ntuvera' target="_blank"><i className="fa fa-github-square fa-3x"></i>
							</a>
						</li>
						<li className='contact-icons'>
							<a href='https://twitter.com/ntuvera' target="_blank"><i className="fa fa-twitter-square fa-3x"></i>
							</a>
						</li>
						<li className='contact-icons'>
							<a href='https://plus.google.com/102666707351406533703/posts/p/pub' target="_blank"><i className="fa fa-google-plus fa-3x"></i>
							</a>
						</li>
					</ul>
					<hr/>
				</div>
			</div>
		);
	}

}

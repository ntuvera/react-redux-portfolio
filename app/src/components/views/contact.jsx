import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		pageView: null
	};
})


export default class ContactPage extends Component {

	render() {

	// let divStyle = {
	// };

		return (
			<div class='contact-me'>

				<div class="sixteen columns">
					<h1 class="remove-bottom" style="margin-top: 40px"></h1>
					<h5 style="text-align: left;">For those interested in reaching me...</h5>
					<hr />
					<ul>
						<li class='contact-icons'>
							<a href='mailto:ntuvera@gmail.com' target="_blank"><i class="fa fa-envelope fa-3x"></i>
							</a>
						</li>
						<li class='contact-icons'>
							<a href='http://www.natetuvera.com/resume.html' target="_blank"><i class="fa fa-file-word-o fa-3x"></i>
							</a>
						</li>
						<li class='contact-icons'>
							<a href='https://www.linkedin.com/pub/nathaniel-tuvera/44/356/239' target="_blank"><i class="fa fa-linkedin fa-3x"></i>
							</a>
						</li>
						<li class='contact-icons'>
							<a href='https://github.com/ntuvera' target="_blank"><i class="fa fa-github-square fa-3x"></i>
							</a>
						</li>
						<li class='contact-icons'>
							<a href='https://twitter.com/ntuvera' target="_blank"><i class="fa fa-twitter-square fa-3x"></i>
							</a>
						</li>
						<li class='contact-icons'>
							<a href='https://plus.google.com/102666707351406533703/posts/p/pub' target="_blank"><i class="fa fa-google-plus fa-3x"></i>
							</a>
						</li>
					</ul>
					<hr/>
				</div>
			</div>
		);
	}

}

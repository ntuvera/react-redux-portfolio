import React, { Component } from 'react';
import NavBar from './header/navbar.jsx';
// import { connect } from 'react-redux';

// @connect((store) => {
//     return {
//     };
// })

export default class App extends Component {
    render() {
      return (
        <div className='holder-of-things'>
          <NavBar />
          <hr/>
          <h1> Hello App! </h1>
        </div>
        );
    }
}

/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Navbar />
      </Fragment>
    );
  }
}

export default App;

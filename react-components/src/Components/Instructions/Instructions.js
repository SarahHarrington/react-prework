import React, { Component } from 'react';// desctructuring, getting the component from the React file

class Instructions extends Component {
  render() {
    return (
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    );
  }
}

//This exports the app to make it available elsewhere
export default Instructions;
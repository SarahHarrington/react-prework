import React, { Component } from 'react';// desctructuring, getting the component from the React file
import './App.css'; //importing css styles from the file
import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions'

class App extends Component {
  render() {
    return (
      <div className="App"> 
      {/* We can't use class in JSX, in React it should be className */}
      <Header />
      <Instructions />
      </div>
    );
  }
}

//This exports the app to make it available elsewhere
export default App;

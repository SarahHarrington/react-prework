import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props); //extends the properties of the parent component

    this.state = {
      user: {
        name: '',
        city: ''
      }
    };

    //makes 'this' in handlechange the same as this in the constructor
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.cityChangeHandler = this.cityChangeHandler.bind(this);


  }

  nameChangeHandler(event) {
    console.log(event.target.value);
    this.setState({
      user :{ 
        name: event.target.value,
        city: this.state.user.city
      }
    })
  }

  cityChangeHandler(event) {
    console.log(event.target.value);
    this.setState({
      user: {
        name: this.state.user.name,
        city: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <p> The user is { this.state.user.name }</p> 
        <p> <input type="text" onChange={this.nameChangeHandler}/> </p>
        <p> The user is from {this.state.user.city}</p>
        <p> <input type="text" onChange={this.cityChangeHandler}/> </p>
      </div>
    );
  }
}

export default App;

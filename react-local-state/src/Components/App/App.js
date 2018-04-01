import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props); //extends the properties of the parent component

    this.state = {
      user: {
        name: '',
        city: '',
        zipCode: '',
      }
    };

    //makes 'this' in handlechange the same as this in the constructor
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.cityChangeHandler = this.cityChangeHandler.bind(this);
    this.zipChangeHandler = this.zipChangeHandler.bind(this);


  }

  nameChangeHandler(event) {
    console.log(event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value,
      }
    })
  }

  cityChangeHandler(event) {
    console.log(event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        city: event.target.value
      }
    })
  }

  zipChangeHandler(event) {
    console.log(event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        zipCode: event.target.value
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
        <p> This zipcode is {this.state.user.zipCode} </p>
        <p> <input type="text" onChange={this.zipChangeHandler} /></p>
      </div>
    );
  }
}

export default App;

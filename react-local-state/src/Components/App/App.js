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
    // this.nameChangeHandler = this.nameChangeHandler.bind(this);
    // this.cityChangeHandler = this.cityChangeHandler.bind(this);
    // this.zipChangeHandler = this.zipChangeHandler.bind(this);
    // this.handleChangeFor = this.handleChangeFor.bind(this);
    this.handleChangeFor = this.handleChangeFor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // nameChangeHandler(event) {
  //   console.log(event.target.value);
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       name: event.target.value,
  //     }
  //   })
  // }

  // cityChangeHandler(event) {
  //   console.log(event.target.value);
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       city: event.target.value
  //     }
  //   })
  // }

  // zipChangeHandler(event) {
  //   console.log(event.target.value);
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       zipCode: event.target.value
  //     }
  //   })
  // }

  //currying is a way of creating a function that creates other functions
  // Currying - is returning another function
  //we don't need to do the binding like above for the arrow function
  handleChangeFor = (propertyName) => {
    //this.state.user.name
    //this['state]['user']['name'] - here we want to change the prop name on the fly
    //so we need to use the bracket notation
    return (event) => {
      this.setState({
        user: {
          ...this.state.user,
          [propertyName]: event.target.value
        }
      })
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.state.user);
    this.setState({
      user: {
        name: '',
        city: '',
        zipCode: ''
      }
    })
  }

  //the above function can be written as
  // handleChangeFor = propertyName => event => {
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       [propertyName]: event.target.value
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <p> The user is { this.state.user.name }</p> 
        <p> The user is from {this.state.user.city}</p>
        <p> This zipcode is {this.state.user.zipCode} </p>

        <form onSubmit={this.handleSubmit}> 
          <input type="text" onChange={this.handleChangeFor('name')} value={this.state.user.name}/> 
          <input type="text" onChange={this.handleChangeFor('city')} value={this.state.user.city}/> 
          <input type="text" onChange={this.handleChangeFor('zipCode')} value={this.state.user.zipCode}/>
          <input type="submit" value="Submit the Form"/>
        </form>

      </div>
    );
  }
}

export default App;

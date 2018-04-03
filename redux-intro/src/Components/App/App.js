import React, { Component } from 'react';
import { connect } from 'react-redux'; // the glue that holds it together

class App extends Component {
  // state = {
  //   newElement: ''
  // }

  constructor() {
    super();
    this.state = {
      newElement: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    this.setState({
      newElement: event.target.value
    })
  }

  handleClick() {
    this.props.dispatch({ type: 'ADD-ELEMENT', payload: this.state.newElement })
    this.setState({
      newElement: ''
    })
  }

  render() {
    return (
      <div >
        <button onClick={() => this.props.dispatch({ type: 'BUTTON-ONE' })}>Button One</button>
        {/* dispatch is something that react redux creates for us */}
        {/* dispatching an action */}
        {/* by convention, the type should be all caps */}
        <button onClick={() => this.props.dispatch({ type: 'BUTTON-TWO' })}>Button Two</button>
        <input value={this.state.newElement} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add Element</button>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);
//connect runs a function, returns a function and then runs it on the app - Currying
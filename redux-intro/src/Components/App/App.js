import React, { Component } from 'react';
import { connect } from 'react-redux'; // the glue that holds it together

class App extends Component {
  // state = {
  //   newElement: ''
  // }

  constructor() {
    super();
    this.state = {
      newElement: {
        name: '',
        atomicWeight: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearList = this.clearList.bind(this);
  }


  handleChange = propertyName => event => {
    console.log(propertyName)
    this.setState({
      newElement: {
        ...this.state.newElement,
        [propertyName]: event.target.value
      }
    })
  }

  handleClick(event) {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD-ELEMENT', payload: this.state.newElement })
    this.setState({
      newElement: {
        name: '',
        atomicWeight: ''
      }
    })
  }

  clearList() {
    this.props.dispatch({ type: 'CLEAR-ELEMENT-LIST' })
  }

  render() {
    return (
      <div >
        <form onSubmit={ this.handleClick }>
          <input value={this.state.newElement.name} onChange={this.handleChange('name')}/>
          <input value={this.state.newElement.atomicWeight} onChange={this.handleChange('atomicWeight')}/>
          <input type="submit" value="Add Element" />
          <button onClick={this.clearList}>Clear List</button>
        </form>
        <pre>{JSON.stringify(this.props.state)}</pre>
        <ul>
          { this.props.state.elementList.map(element => <li key={ element.name }>The element { element.name } weighs: { element.atomicWeight }</li>) }
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = state => ({
  state
})

export default connect(mapReduxStateToProps)(App);
//connect runs a function, returns a function and then runs it on the app - Currying
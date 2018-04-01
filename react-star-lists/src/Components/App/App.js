import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList: [
        {name: 'Hadar', diameter: 50}, 
        {name: 'Gacrux', diameter: 75}, 
        {name: 'FomalHaut', diameter: 100}
      ],
      newStar: {
        name: '',
        diameter: ''
      }
    }

    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleDiameterChange = this.handleDiameterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleNameChange(event) {
  //   this.setState({
  //     newStar: {
  //       ...this.state.newStar,
  //       name: event.target.value,
  //     }
  //   })
  // }

  // handleDiameterChange(event) {
  //   this.setState({
  //     newStar: {
  //       ...this.state.newStar,
  //       diameter: event.target.value
  //     }
  //   })
  // }

  handleChangeFor(propertyName) {
    return(event) => {
      this.setState({
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value
        }
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('button clicked');
    console.log(this.state.newStar)
    this.setState({
      starList: [...this.state.starList, this.state.newStar],
      newStar: {
        name: '',
        diameter: ''
      }
    })
  }

  render() {
    
    //ES6 one line function
    // const starListItemArray = this.state.starList.map(star => <li>{star}</li>);

    // let starListItemArray = [];
    
    //for each loop
    // this.state.starList.forEach(function(star){
    //   const starListItem = <li>{star}</li>
    //   starListItemArray.push(starListItem)
    // })

    //traditional for loop
    // for (let i = 0; i < this.state.starList.length; i++) {
    //   const starListItem = <li>{this.state.starList[i]}</li>
    //   starListItemArray.push(starListItem)
    // }

    return (
      <div>
        {/* <div>
          this.state: {JSON.stringify(this.state)}
        </div>
        <div>
          {/* this.state.starList: { this.state.starList } */}
          {/* React can display arrays directly to the DOM */}
        {/* </div> */}
        <div>
          <div>
            Current New Star is { this.state.newStar.name } with a diamter of {this.state.newStar.diameter}.
          </div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChangeFor('name')} value={this.state.newStar.name}/>
            <input onChange={this.handleChangeFor('diameter')} value={this.state.newStar.diameter}/>
            <input type='submit' value='Submit New Star'/>
          </form>
        </div>
        <ul>
          {this.state.starList.map(star => <li key={star.name} >This star has a {star.name} and has a diamter of {star.diameter} </li>)}
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';

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
      },
      planetList: []
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

  handleChangeFor = propertyName => event => {
      this.setState({
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value
        }
      })
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

  componentDidMount() {
    console.log('component did mount');
    this.getPlanets();
  }

  getPlanets() {
    axios.get('https://swapi.co/api/planets/?format=json').then(response => {
      console.log(response.data.results);
      this.setState({
        planetList: response.data.results
      })
    }).catch(error => {
      console.log(error);
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
        <Header />
        <CurrentNewStar newStar={this.state.newStar}/>
        <NewStarForm 
          newStar={ this.state.newStar }
          handleChangeFor={ this.handleChangeFor} 
          handleSubmit={ this.handleSubmit }/>
        <StarList starList={ this.state.starList }/>
        <ul>
          {this.state.planetList.map( planet => <li > {planet.name} </li>)}
        </ul>
      </div>
    );
  }
}

export default App;

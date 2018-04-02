import React, { Component } from 'react';

class StarList extends Component {

  render(props) {

    return (
      <div>
        <ul>
          {this.props.starList.map(star => <li key={star.name} >This star has a {star.name} and has a diamter of {star.diameter} </li>)}
        </ul>
      </div>
    );
  }
}

export default StarList;

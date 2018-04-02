import React, { Component } from 'react';

class CurrentNewStar extends Component{



  render(props) {
    return(
      <div>
        Current New Star is { this.props.newStar.name } with a diamter of {this.props.newStar.diameter}.
      </div>
    );
  }

}

export default CurrentNewStar;
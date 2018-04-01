import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList: ['Hadar', 'Gacrux', 'FomalHaut']
    }
  }

  render() {
    
    return (
      <div>
        <div>
          this.state: {JSON.stringify(this.state)}
        </div>
        <div>
          this.state.starList: { this.state.starList }
          {/* React can display arrays directly to the DOM */}
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;

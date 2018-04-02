import React, { Component } from 'react';

class NewStarForm extends Component {

  render(props) {
    return (
      <form onSubmit={ this.props.handleSubmit }>
        <input onChange={this.props.handleChangeFor('name')} value={this.props.newStar.name} />
        <input onChange={this.props.handleChangeFor('diameter')} value={this.props.newStar.diameter} />
        <input type='submit' value='Submit New Star' />
      </form>
    );
  }
}

export default NewStarForm;

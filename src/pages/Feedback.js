import React, { Component } from 'react';

export default class Feedback extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1 data-testid="feedback-text">
          Feedback
        </h1>
        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ () => history.push('/ranking') }
        >
          Ranking
        </button>
      </div>
    );
  }
}

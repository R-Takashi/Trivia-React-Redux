import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ () => history.push('/') }
        >
          Play Again
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};

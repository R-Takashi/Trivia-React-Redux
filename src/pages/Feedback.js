import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderFeedback from './components/HeaderFeedback';

class Feedback extends Component {
  render() {
    const { history, assertions } = this.props;
    const threeAssertions = 3;
    return (
      <div>
        <HeaderFeedback />
        {
          assertions < threeAssertions && (
            <h1 data-testid="feedback-text">Could be better...</h1>
          )
        }
        {
          assertions >= threeAssertions && <h1 data-testid="feedback-text">Well Done!</h1>
        }

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

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  assertions: PropTypes.number.isRequired,
};

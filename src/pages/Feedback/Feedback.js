import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setScore, setAssertions, resetQuestions } from '../../redux/actions';
import HeaderStyle from '../components/Header/Header';
import Container from '../Game/styles';
import { FinalScore, FinalPhrase, Buttons } from './styles';

class Feedback extends Component {
  playAgain = () => {
    const { history, addAssertions, addScore, clear } = this.props;
    history.push('/');
    addAssertions(0);
    addScore(0);
    clear();
  }

  render() {
    const { history, assertions, score } = this.props;
    const threeAssertions = 3;
    return (
      <Container>
        <HeaderStyle />
        <FinalScore>
          <div>
            <h1>
              Acertos :
              {' '}
              <span data-testid="feedback-total-question">{ assertions }</span>
            </h1>
          </div>
          <div>
            <h1>
              Pontos :
              {' '}
              <span data-testid="feedback-total-score">{ score }</span>
            </h1>
          </div>
        </FinalScore>

        <FinalPhrase>

          {
            assertions < threeAssertions ? (
              <h1 data-testid="feedback-text">Could be better...</h1>
            )
              : (
                <h1 data-testid="feedback-text">Well Done!</h1>
              )
          }

        </FinalPhrase>

        <Buttons>

          <button
            data-testid="btn-play-again"
            type="button"
            onClick={ this.playAgain }
          >
            Play Again
          </button>

          <button
            data-testid="btn-ranking"
            type="button"
            onClick={ () => history.push('/ranking') }
          >
            Ranking
          </button>

        </Buttons>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  addScore: (score) => dispatch(setScore(score)),
  addAssertions: (assertions) => dispatch(setAssertions(assertions)),
  clear: () => dispatch(resetQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  assertions: PropTypes.number.isRequired,
  addAssertions: PropTypes.func.isRequired,
  addScore: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

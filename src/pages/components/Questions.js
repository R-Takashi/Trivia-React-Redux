import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setScore, setAssertions } from '../../redux/actions';

let timerInterval;
class Questions extends Component {
  constructor() {
    super();

    this.state = {
      questionsIndex: 0,
      correct: 'yellow',
      incorrect: 'yellow',
      isDisabled: false,
      seconds: 30,
      score: 0,
      nextButton: false,
      assertions: 0,
    };
  }

  componentDidMount() {
    this.timer();
  }

  shuffleArray = (inputArray) => {
    const half = 0.5;
    return inputArray.sort(() => Math.random() - half);
    // referência da funçaõ de aleatorizar array: https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/
  }

  verifyDifficulty = (difficulty) => {
    const difficulties = { easy: 1, medium: 2, hard: 3 };
    return difficulties[difficulty];
  }

  onClick = (answer, { target }) => {
    this.timerDisable();
    const scoreTen = 10;
    const { score, seconds, assertions } = this.state;
    
    if (target.id === 'correct') {
      const { addScore, addAssertions } = this.props;
      const acertos = assertions + 1;
      const pontos = score + scoreTen
      + (seconds * this.verifyDifficulty(answer.difficulty));
      this.setState({
        score: pontos,
        assertions: acertos,
      });
      // const { assertions: a } = this.state;
      addScore(pontos);
      addAssertions(acertos);
    }
    this.setState({
      correct: 'rgb(6, 240, 15)',
      incorrect: 'red',
      nextButton: true,
    });
  }

  nextQuestion = () => {
    const { questionsIndex } = this.state;
    const { questions, history } = this.props;
    console.log(history);

    if (questionsIndex >= questions.length - 1) {
      history.push('/feedback');
    }

    this.setState({
      questionsIndex: questionsIndex < questions.length - 1
        ? questionsIndex + 1 : 0,
      correct: 'yellow',
      incorrect: 'yellow',
      seconds: 30,
      nextButton: false,
    });

    this.timer();
  }

  timer = () => {
    const timer = 1000;
    timerInterval = setInterval(() => {
      const { seconds } = this.state;
      this.setState({
        seconds: seconds - 1,
      });
    }, timer);
  }

  timerDisable = () => {
    clearInterval(timerInterval);
  }

  timeout = () => {
    this.timerDisable();
    this.setState({
      isDisabled: true,
      seconds: 30,
      nextButton: true,
    });
  }

  render() {
    const { questions } = this.props;
    const { questionsIndex, correct, incorrect,
      isDisabled = false, seconds, nextButton } = this.state;
    const currentQuestion = questions[questionsIndex];
    const answers = this.shuffleArray([...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer]);
    return (
      <div>
        {seconds === 0 && this.timeout()}
        <p>{seconds}</p>
        <h3 data-testid="question-category">{ questions[questionsIndex].category }</h3>
        <p data-testid="question-text">{ questions[questionsIndex].question }</p>
        {answers.map((answer, index) => (
          <div key={ index } data-testid="answer-options">
            <button
              id={ (answer === currentQuestion.correct_answer) ? 'correct' : 'wrong' }
              data-testid={ (answer === currentQuestion.correct_answer)
                ? 'correct-answer'
                : `wrong-answer-${index}` }
              type="button"
              style={ (answer === currentQuestion.correct_answer)
                ? { border: `3px solid ${correct}` }
                : { border: `3px solid ${incorrect}` } }
              onClick={ (event) => this.onClick(currentQuestion, event) }
              disabled={ isDisabled }
            >
              {answer}
            </button>
          </div>
        ))}

        { nextButton && (
          <button
            data-testid="btn-next"
            type="button"
            onClick={ this.nextQuestion }
          >
            Next
          </button>)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addScore: (score) => dispatch(setScore(score)),
  addAssertions: (assertions) => dispatch(setAssertions(assertions)),
});

export default connect(null, mapDispatchToProps)(Questions);

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape).isRequired,
  addScore: PropTypes.func.isRequired,
  addAssertions: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};

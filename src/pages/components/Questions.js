import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Questions extends Component {
  constructor() {
    super();

    this.state = {
      questionsIndex: 0,
      correct: 'yellow',
      incorrect: 'yellow',
      isDisabled: false,
    };
  }

  shuffleArray = (inputArray) => {
    const half = 0.5;
    return inputArray.sort(() => Math.random() - half);
    // referência da funçaõ de aleatorizar array: https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/
  }

  onClick = () => {
    const { questionsIndex } = this.state;
    const timer = 3000;
    this.setState({
      correct: 'rgb(6, 240, 15)',
      incorrect: 'red',
    });
    setTimeout(() => {
      const { questions } = this.props;
      this.setState({
        questionsIndex: questionsIndex < questions.length - 1
          ? questionsIndex + 1 : 0,
        correct: 'yellow',
        incorrect: 'yellow',
      });
    }, timer);
  }

  render() {
    const { questions } = this.props;
    const { questionsIndex, correct, incorrect, isDisabled = false } = this.state;
    const currentQuestion = questions[questionsIndex];
    const answers = [...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer];
    const timer = 30000;

    return (
      <div>
        { setTimeout(() => {
          this.setState({
            isDisabled: true,
          });
        }, timer)}
        <h3 data-testid="question-category">{ questions[questionsIndex].category }</h3>
        <p data-testid="question-text">{ questions[questionsIndex].question }</p>
        {
          this.shuffleArray(answers).map((answer, index) => (
            <div key={ index } data-testid="answer-options">
              <button
                data-testid={ (answer === currentQuestion.correct_answer)
                  ? 'correct-answer'
                  : `wrong-answer-${index}` }
                type="button"
                style={ (answer === currentQuestion.correct_answer)
                  ? { border: `3px solid ${correct}` }
                  : { border: `3px solid ${incorrect}` } }
                onClick={ this.onClick }
                disabled={ isDisabled }
              >
                {answer}
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

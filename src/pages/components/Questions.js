import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Questions extends Component {
  constructor() {
    super();

    this.state = {
      questionsIndex: 0,
    };
  }

  shuffleArray = (inputArray) => {
    const half = 0.5;
    return inputArray.sort(() => Math.random() - half);
  }

  render() {
    const { questions } = this.props;
    const { questionsIndex } = this.state;
    const currentQuestion = questions[questionsIndex];
    const answers = [...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer];

    return (
      <div>
        <h3 data-testid="question-category">{ questions[questionsIndex].category }</h3>
        <p data-testid="question-text">{ questions[questionsIndex].question }</p>
        {
          this.shuffleArray(answers).map((answer, index) => (
            <div key={ index } data-testid="answer-options">
              <button
                data-testid={ answer === currentQuestion.correct_answer
                  ? 'correct-answer'
                  : `wrong-answer-${index}` }
                type="button"
                onClick={ () => this.setState({
                  questionsIndex: questionsIndex < questions.length - 1
                    ? questionsIndex + 1 : 0,
                }) }
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

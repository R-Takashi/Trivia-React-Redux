import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import he from 'he';
import { QuestionStyle, TimerCategory, Container } from './styles';
import { setScore, setAssertions } from '../../../redux/actions';
import { getRanking, setRanking } from '../../../services/localStorage';

let timerInterval;
class Questions extends Component {
  constructor() {
    super();

    this.state = {
      questionsIndex: 0,
      correct: '#CC9F38',
      incorrect: '#CC9F38',
      isDisabled: false,
      seconds: 30,
      score: 0,
      nextButton: false,
      assertions: 0,
      shuffledAnswers: [],
    };
  }

  componentDidMount() {
    this.timer();

    const answers = this.shuffledAnswers();
    this.setState({ shuffledAnswers: answers });
  }

  shuffledAnswers = () => {
    const { questions } = this.props;
    const { questionsIndex } = this.state;
    const currentQuestion = questions[questionsIndex];
    const answers = this.shuffleArray([...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer]);

    return answers;
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
      addScore(pontos);
      addAssertions(acertos);
    }
    this.setState({
      correct: 'rgb(6, 240, 15)',
      incorrect: 'red',
      nextButton: true,
      isDisabled: true,
    });
  }

  nextQuestion = () => {
    const { questionsIndex } = this.state;
    const { questions } = this.props;

    if (questionsIndex >= questions.length - 1) {
      const { email, name, history } = this.props;
      const oldRank = getRanking() || [];
      const hash = md5(email).toString();
      const { score } = this.state;
      const ranking = [...oldRank,
        { name, score, picture: `https://www.gravatar.com/avatar/${hash}` },
      ];
      setRanking(ranking);

      history.push('/feedback');
    }

    this.setState({
      questionsIndex: questionsIndex < questions.length - 1
        ? questionsIndex + 1 : 0,
      correct: '#CC9F38',
      incorrect: '#CC9F38',
      seconds: 30,
      nextButton: false,
      isDisabled: false,
    }, () => {
      this.setState({ shuffledAnswers: this.shuffledAnswers() });
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
      seconds: 'Acabou o Tempo',
      nextButton: true,
      correct: 'rgb(6, 240, 15)',
      incorrect: 'red',
    });
  }

  render() {
    const { questions } = this.props;
    const { questionsIndex,
      correct,
      incorrect,
      isDisabled,
      seconds,
      nextButton,
      shuffledAnswers } = this.state;

    const currentQuestion = questions[questionsIndex];

    return (
      <Container>
        <TimerCategory>
          {seconds === 0 && this.timeout()}
          <h2>Timer</h2>
          <h3>{seconds}</h3>
          <h3 data-testid="question-category">{ questions[questionsIndex].category }</h3>
        </TimerCategory>
        <QuestionStyle>
          <h1 data-testid="question-text">
            {
              he.decode(questions[questionsIndex].question)
            }
          </h1>
          {shuffledAnswers.map((answer, index) => (
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
                { he.decode(answer) }
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
        </QuestionStyle>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addScore: (score) => dispatch(setScore(score)),
  addAssertions: (assertions) => dispatch(setAssertions(assertions)),
});

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape).isRequired,
  addScore: PropTypes.func.isRequired,
  addAssertions: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

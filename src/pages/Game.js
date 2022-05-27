import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './Game/styles';
import { fetchQuestions } from '../redux/actions';
import Header from './components/Header';
import Questions from './components/Questions';
import { getStorage } from '../services/localStorage';

class Game extends Component {
  async componentDidMount() {
    const token = getStorage();
    const { getQuestions } = this.props;
    await getQuestions(token);
    this.checkToken();
  }

  checkToken = () => {
    const { response_code: response, history } = this.props;
    const codeError = 3;
    if (response === codeError) history.push('/');
  }

  render() {
    const { results, response_code: response, history } = this.props;
    const codeError = 3;
    console.log(results, response);
    return response !== codeError && (
      <Container>
        <Header />
        <Questions questions={ results } history={ history } />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(fetchQuestions(token)),
});

const mapStateToProps = (state) => ({
  response_code: state.questions.response_code,
  results: state.questions.results,
  getQuestions: fetchQuestions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

Game.propTypes = {
  response_code: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  getQuestions: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

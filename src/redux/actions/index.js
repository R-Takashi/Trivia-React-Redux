export const SAVE_DATA = 'SAVE_DATA';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_SCORE = 'SET_SCORE';
export const SET_ASSERTIONS = 'SET_ASSERTIONS';
export const RESET_QUESTIONS = 'RESET_QUESTIONS';
export const SET_CONFIG = 'SET_CONFIG';

export const saveData = (email, name) => ({
  type: SAVE_DATA,
  email,
  name,
});

export const getQuestions = (data) => ({
  type: GET_QUESTIONS,
  response_code: data.response_code,
  results: data.results,
});

export const resetQuestions = () => ({
  type: RESET_QUESTIONS,
});

export const setScore = (score) => ({
  type: SET_SCORE,
  score,
});

export const setAssertions = (assertions) => ({
  type: SET_ASSERTIONS,
  assertions,
});

export const setConfig = (config) => ({
  type: SET_CONFIG,
  config,
});

export const fetchQuestions = (token, config) => async (dispatch) => {
  try {
    const { id = '', amount, difficulty = '', type = '' } = config;
    const URL = `https://opentdb.com/api.php?amount=${amount}&category=${id}&difficulty=${difficulty}&type=${type}&token=${token}`;
    console.log(URL);
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    dispatch(getQuestions(data));
  } catch (error) {
    return error;
  }
};

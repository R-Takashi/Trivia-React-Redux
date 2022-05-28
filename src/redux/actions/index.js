export const SAVE_DATA = 'SAVE_DATA';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_SCORE = 'SET_SCORE';
export const SET_ASSERTIONS = 'SET_ASSERTIONS';

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

export const setScore = (score) => ({
  type: SET_SCORE,
  score,
});

export const setAssertions = (assertions) => ({
  type: SET_ASSERTIONS,
  assertions,
});

export const fetchQuestions = (token) => async (dispatch) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const data = await response.json();
    dispatch(getQuestions(data));
  } catch (error) {
    return error;
  }
};

export const SAVE_DATA = 'SAVE_DATA';
export const GET_QUESTIONS = 'GET_QUESTIONS';

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

export const fetchQuestions = (token) => async (dispatch) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const data = await response.json();
    console.log(data);
    dispatch(getQuestions(data));
  } catch (error) {
    return error;
  }
};

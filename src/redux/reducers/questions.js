import { GET_QUESTIONS, RESET_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  response_code: 3,
  results: [],
};

export default function questions(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      results: action.results,
      response_code: action.response_code,
    };

  case RESET_QUESTIONS:
    return {
      ...state,
      ...INITIAL_STATE,
    };

  default:
    return state;
  }
}

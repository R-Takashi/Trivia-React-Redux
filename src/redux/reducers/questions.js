import { GET_QUESTIONS } from '../actions';

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

  default:
    return state;
  }
}

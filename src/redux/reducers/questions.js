import { GET_QUESTIONS, RESET_QUESTIONS, SET_CONFIG } from '../actions';

const INITIAL_STATE = {
  response_code: 3,
  results: [],
  config: {
    id: '',
    difficulty: '',
    type: '',
    amount: 5,
  },
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

  case SET_CONFIG:
    return {
      ...state,
      config: action.config,
    };

  default:
    return state;
  }
}

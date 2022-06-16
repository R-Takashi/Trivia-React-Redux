import { SAVE_DATA, SET_SCORE, SET_ASSERTIONS } from '../actions';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  score: 0,
  assertions: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_DATA:
    return {
      ...state,
      gravatarEmail: action.email,
      name: action.name,
    };

  case SET_SCORE:
    return {
      ...state,
      score: action.score,
      assertions: state.assertions + 1,
    };

  case SET_ASSERTIONS:
    return {
      ...state,
      assertions: action.assertions,
    };

  default:
    return state;
  }
};

export default player;

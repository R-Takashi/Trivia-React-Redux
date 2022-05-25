import { SAVE_DATA, SET_SCORE } from '../actions';

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
    };

  default:
    return state;
  }
};

export default player;

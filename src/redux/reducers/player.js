import { SAVE_DATA } from '../actions';

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

  default:
    return state;
  }
};

export default player;

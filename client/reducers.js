import { combineReducers } from 'redux';
import { SET_CONFIG, CHOOSE_LANGUAGE } from './actions';
import { Languages } from './containers/Content';

const { PT } = Languages;

const initialState = {
  selected: PT
}

function config(state = {}, action) {
  switch (action.type) {
  case SET_CONFIG:
    return action.config;
  default:
    return state;
  }
}

function lang(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      return Object.assign({}, state, {
        selected: action.lang,
        //content: action.content
      })
    default:
      return state
  }
}

export default combineReducers({
  config,
  lang
});

import {
  CHANGE_MIN_COUNTER_VALUE,
  CHANGE_MAX_COUNTER_VALUE,
  CHANGE_CURRENT_COUNTER_VALUE,
} from '../actions/main-page-actions';

const initialState = {
  minCounterValue: -10,
  maxCounterValue: 10,
  currentCounterValue: 0,
}

export const mainPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_MIN_COUNTER_VALUE:
      return {
        ...state,
        minCounterValue: action.minCounterValue,
      };
    case CHANGE_MAX_COUNTER_VALUE:
      return {
        ...state,
        maxCounterValue: action.maxCounterValue,
      };
    case CHANGE_CURRENT_COUNTER_VALUE:
      return {
        ...state,
        currentCounterValue: action.currentCounterValue,
      }
    default:
      return state;
  }
}

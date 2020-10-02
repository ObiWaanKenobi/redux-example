// action types
export const CHANGE_MIN_COUNTER_VALUE = 'CHANGE_MIN_COUNTER_VALUE';
export const CHANGE_MAX_COUNTER_VALUE = 'CHANGE_MAX_COUNTER_VALUE';
export const CHANGE_CURRENT_COUNTER_VALUE = 'CHANGE_CURRENT_COUNTER_VALUE';

//actions creators
export const changeMinCounterValueAction = minCounterValue => ({
  type: CHANGE_MIN_COUNTER_VALUE,
  minCounterValue,
});

export const changeMaxCounterValueAction = maxCounterValue => ({
  type: CHANGE_MAX_COUNTER_VALUE,
  maxCounterValue,
});

export const changeCurrentCounterValueAction = currentCounterValue => ({
  type: CHANGE_CURRENT_COUNTER_VALUE,
  currentCounterValue,
});

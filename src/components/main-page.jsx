import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  changeMinCounterValueAction,
  changeMaxCounterValueAction,
  changeCurrentCounterValueAction,
} from '../actions/main-page-actions';


const MainPageComponent = ({
  minCounterValue,
  maxCounterValue,
  currentCounterValue,
  changeMinCounterValue,
  changeMaxCounterValue,
  changeCurrentCounterValue,
}) => {
  const [minValue, setMinValue] = useState(minCounterValue);
  const [maxValue, setMaxValue] = useState(maxCounterValue);

  const handleMinValueChange = ({ target }) => setMinValue(target.value);
  const handleMaxValueChange = ({ target }) => setMaxValue(target.value);

  const handleDecreaseCurrentValue = (value) => () => {
    value >= minValue && changeCurrentCounterValue(value);
  };

  const handleIncreaseCurrentValue = (value) => () => {
    value <= maxValue && changeCurrentCounterValue(value);
  }

  return (
    <div style={{ marginLeft: '50px', marginTop: '20px' }}>
      <div>
        <label for="minCounterValue">Min Counter Value:</label>
        <input
          id="minCounterValue"
          value={minValue}
          onChange={handleMinValueChange}
        />
        <button onClick={() => changeMinCounterValue(minValue)}>Submit</button>
      </div>
      <div>
        <label for="maxCounterValue">Max Counter Value:</label>
        <input
          id="maxCounterValue"
          value={maxValue}
          onChange={handleMaxValueChange}
        />
        <button onClick={() => changeMaxCounterValue(maxCounterValue)}>Submit</button>
      </div>
      <div style={{ marginTop: '15px' }}>
        <button onClick={handleDecreaseCurrentValue(currentCounterValue - 1)}>-</button>
        <span style={{ marginLeft: '10px', marginRight: '10px' }}>{currentCounterValue}</span>
        <button onClick={handleIncreaseCurrentValue(currentCounterValue + 1)}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ mainPage: {
  minCounterValue,
  maxCounterValue,
  currentCounterValue,
}}) => ({
  minCounterValue,
  maxCounterValue,
  currentCounterValue,
});

const mapDispatchToProps = {
  changeMinCounterValue: changeMinCounterValueAction,
  changeMaxCounterValue: changeMaxCounterValueAction,
  changeCurrentCounterValue: changeCurrentCounterValueAction,
}

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);

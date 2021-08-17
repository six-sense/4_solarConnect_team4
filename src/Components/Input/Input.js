import React from 'react';
import { style } from './InputStyle';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { setInputData, setKeyEnter } = props;

  const onChangeNumber = (e) => {
    setInputData(e.target.value);
  };

  const onKeyPressEnter = (e) => {
    if (e.key === 'Enter') {
      setKeyEnter(true);
    }
    onChangeNumber(e);
  };

  return (
    <>
      <InputNumber onChange={onChangeNumber} onKeyPress={onKeyPressEnter} />
    </>
  );
};

export default Input;

const { InputNumber } = style;

Input.propTypes = {
  setInputData: PropTypes.func,
  setKeyEnter: PropTypes.func,
};

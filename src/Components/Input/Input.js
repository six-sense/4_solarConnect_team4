import React from 'react';
import { style } from './InputStyle';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { setData } = props;

  const onChangeNumber = (e) => {
    setData(e.target.value);
  };

  // const onKeyPressEnter = (e) => {
  //   e.preventDefault();
  //   onChangeNumber(e);
  // }

  return (
    <>
      <InputNumber onChange={onChangeNumber} />
    </>
  );
};

export default Input;

const { InputNumber } = style;

Input.propTypes = {
  setData: PropTypes.func,
};

import React, { useState, useEffect, useCallback } from 'react';
import { style } from './StartButtonStyle';
import PropTypes from 'prop-types';
import { quickSort, reverseArray, splitNumber, checkValidation } from 'utils';
import { Toast } from 'Components';

const StartButton = (props) => {
  const {
    inputData,
    setAscendedArray,
    setDescendedArray,
    keyEnter,
    setKeyEnter,
  } = props;
  const [toast, setToast] = useState({
    status: false,
    msg: '',
  });

  const onClickStart = useCallback(() => {
    setAscendedArray([]);
    setDescendedArray([]);
    if (!checkValidation(inputData)) {
      setToast((prevToast) => ({
        ...prevToast,
        status: true,
        msg: '양식에 알맞게 입력해주세요. ex)1,-1,3,-4,5',
      }));
      return;
    }

    const { message, numArr } = splitNumber(inputData);
    if (message) {
      setToast((prevToast) => ({
        ...prevToast,
        status: true,
        msg: message,
      }));
      return;
    }
    quickSort(numArr, 0, numArr.length - 1);
    setAscendedArray(numArr);
    setTimeout(() => {
      setDescendedArray(reverseArray(numArr));
    }, 3000);
  }, [inputData, setAscendedArray, setDescendedArray]);

  useEffect(() => {
    if (keyEnter === true) {
      onClickStart();
      setKeyEnter(false);
    }
  }, [keyEnter, onClickStart, setKeyEnter]);

  useEffect(() => {
    if (toast.status) {
      const timeInterver = setTimeout(() => {
        setToast((prevToast) => ({ ...prevToast, status: false }));
      }, 2000);
      return () => clearTimeout(timeInterver);
    }
  }, [toast]);

  return (
    <>
      <CheckBtn onClick={onClickStart}>정렬 시작하기</CheckBtn>
      <Toast show={toast.status} contents={toast.msg} />
    </>
  );
};

export default StartButton;

const { CheckBtn } = style;

StartButton.propTypes = {
  inputData: PropTypes.string,
  setAscendedArray: PropTypes.func,
  setDescendedArray: PropTypes.func,
  keyEnter: PropTypes.bool,
  setKeyEnter: PropTypes.func,
};

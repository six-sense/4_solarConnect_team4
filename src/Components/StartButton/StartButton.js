import React, { useState, useEffect } from 'react';
import { style } from './StartButtonStyle';
import PropTypes from 'prop-types';
import { quickSort, reverseArray, splitNumber } from 'utils';
import { Toast } from 'Components';

const StartButton = (props) => {
  const { data, setAscendedArray, setDescendedArray } = props;
  // const [sortFunction, setSortFunction] = useState(null);
  const [toast, setToast] = useState({
    status: false,
    msg: '',
  });

  useEffect(() => {
    if (toast.status) {
      const timeInterver = setTimeout(() => {
        setToast((prevToast) => ({ ...prevToast, status: false }));
      }, 2000);
      return () => clearTimeout(timeInterver);
    }
  }, [toast]);

  const onClickStart = () => {
    if (!checkValidation(data)) {
      setToast((prevToast) => ({
        ...prevToast,
        status: true,
        msg: '양식에 알맞게 입력해주세요. ex)1,-1,3,-4,5',
      }));
      return;
    }

    const { message, numArr } = splitNumber(data);
    if (message) {
      setToast((prevToast) => ({
        ...prevToast,
        status: true,
        msg: message,
      }));
    }
    quickSort(numArr, 0, numArr.length - 1);
    setAscendedArray(numArr);
    setTimeout(() => {
      setDescendedArray(reverseArray(numArr));
    }, 3000);
  };

  const checkValidation = (data) => {
    const regex = /[^-\d,]+/;
    if (regex.test(data)) {
      return false;
    } else {
      return true;
    }
  };

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
  data: PropTypes.string,
  setAscendedArray: PropTypes.func,
  setDescendedArray: PropTypes.func,
};

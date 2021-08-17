import React from 'react';
import { style } from './ResultStyle';
import PropTypes from 'prop-types';

const Result = (props) => {
  const { sortedArray, up } = props;

  return (
    <>
      <ResultNumber
        value={sortedArray.join(' ')}
        readOnly
        placeholder={up ? '오름차순 결과' : '내림차순 결과'}
      />
    </>
  );
};

export default Result;

const { ResultNumber } = style;

Result.propTypes = {
  sortedArray: PropTypes.array,
  up: PropTypes.bool,
};

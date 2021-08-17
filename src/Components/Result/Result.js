import React from 'react';
import { style } from './ResultStyle';
import PropTypes from 'prop-types';

const Result = (props) => {
  const { sortedArray, up } = props;
  const ArrLength = sortedArray.length;
  return (
    <>
      <ResultContainer>
        {ArrLength === 0 ? (
          <ResultPlaceholder>
            {up ? '오름차순 결과' : '내림차순 결과'}
          </ResultPlaceholder>
        ) : (
          <ResultNumber>{sortedArray.join(', ')}</ResultNumber>
        )}
      </ResultContainer>
    </>
  );
};

export default Result;

const { ResultNumber, ResultContainer, ResultPlaceholder } = style;

Result.propTypes = {
  sortedArray: PropTypes.array,
  up: PropTypes.bool,
};

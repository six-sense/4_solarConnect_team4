import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { style } from './TimerStyle';
import { dateObject } from 'utils';

const Timer = ({ language }) => {
  const [now, setNow] = useState('');

  useEffect(() => {
    setNow(dateObject[language]);
  }, [language]);

  return (
    <>
      <DateContainer>{now}</DateContainer>
    </>
  );
};

export default Timer;

Timer.propTypes = {
  language: PropTypes.string,
};

const { DateContainer } = style;

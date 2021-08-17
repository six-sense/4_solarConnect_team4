import React, { useState } from 'react';
import { Timer, Input, StartButton, Result } from 'Components';
import { style } from './MainStyle';

const Main = () => {
  const [inputData, setInputData] = useState('');
  const [ascendedArray, setAscendedArray] = useState([]);
  const [descendedArray, setDescendedArray] = useState([]);
  const [keyEnter, setKeyEnter] = useState(false);

  return (
    <Layout>
      <Wrap>
        <Timer language="ko-KR" />
        <Input setInputData={setInputData} setKeyEnter={setKeyEnter} />
        <StartButton
          inputData={inputData}
          setAscendedArray={setAscendedArray}
          setDescendedArray={setDescendedArray}
          keyEnter={keyEnter}
          setKeyEnter={setKeyEnter}
        />
        <Result sortedArray={ascendedArray} up={true} />
        <Result sortedArray={descendedArray} up={false} />
        <Timer language="en-US" />
      </Wrap>
    </Layout>
  );
};

export default Main;

const { Layout, Wrap } = style;

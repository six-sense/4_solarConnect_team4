import React, { useState } from 'react';
import { Timer, Input, StartButton, Result } from 'Components';
import { style } from './MainStyle';

const Main = () => {
  const [data, setData] = useState('');
  //const [date, setDate] = useState('');
  const [ascendedArray, setAscendedArray] = useState([]);
  const [descendedArray, setDescendedArray] = useState([]);

  return (
    <Layout>
      <Timer />
      <Input setData={setData} />
      <StartButton
        data={data}
        setAscendedArray={setAscendedArray}
        setDescendedArray={setDescendedArray}
      />
      <Result sortedArray={ascendedArray} />
      <Result sortedArray={descendedArray} />
      <Timer />
    </Layout>
  );
};

export default Main;

const { Layout } = style;

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
      <Wrap>
        <Timer />
        <Input setData={setData} />
        <StartButton
          data={data}
          setAscendedArray={setAscendedArray}
          setDescendedArray={setDescendedArray}
        />
        <Result sortedArray={ascendedArray} up={true} />
        <Result sortedArray={descendedArray} up={false} />
        <Timer />
      </Wrap>
    </Layout>
  );
};

export default Main;

const { Layout, Wrap } = style;

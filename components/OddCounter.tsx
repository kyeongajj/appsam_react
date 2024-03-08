import { useState } from 'react';

const Viewer = ({ number }: { number: number }) => {
  return <div>{number % 2 === 0 ? '짝수' : '홀수'}</div>;
};

const OddCounter = () => {
  const [number, setNumber] = useState<number>(0);

  const increase = () => {
    setNumber((state) => state + 1);
  };

  const decrease = () => {
    setNumber((state) => state - 1);
  };

  return (
    <div>
      number : {number}
      <button onClick={increase}> increase </button>
      <button onClick={decrease}> decrease </button>
      <Viewer number={number} />
    </div>
  );
};

export default OddCounter;

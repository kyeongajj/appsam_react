import { useReducer } from 'react';
import { Button } from '@mui/material';

const reducer = (
  state: number,
  action: { type: 'INCREASE' | 'DECREASE'; data: number }
) => {
  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>UseReducer</h1>
      <div>count : {count}</div>
      <Button onClick={() => dispatch({ type: 'INCREASE', data: 1 })}>
        증가하기
      </Button>
      <Button onClick={() => dispatch({ type: 'DECREASE', data: 1 })}>
        감소하기
      </Button>
    </div>
  );
};

export default UseReducer;

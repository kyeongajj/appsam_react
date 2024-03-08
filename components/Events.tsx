import React from 'react';

const Events = () => {
  return (
    <div>
      {/*e의 타입을 지정하지 않으면 'any' 타입이라고 하면서 경고가 발생한다.*/}
      <button
        name={'helloButton'}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          console.log((e.target as HTMLButtonElement).name)
        }
      >
        Hello!
      </button>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
      />
    </div>
  );
};

export default Events;

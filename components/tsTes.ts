// string : 글자(문자)
// number : 숫자
// boolean : 참/거짓 true / false
// any : 아무거나 다됨 (안좋음)
// () => void : 이렇게 많이 씀

import { useState } from 'react';

const 변수 = 123;

const 배열: number[] = [1, 2, 3, 4, 5, 6];

const 객체: { name: string; age: number; 추가: string } = {
  name: '이준우',
  age: 1,
  추가: 'asdf',
};

type 나만의타입 = string | number;

type 사람 = {
  name: string;
  age: number;
  팔다리: number;
};

type 배열들 = string[] | number[];

type Member = (string | number)[];

const 나만의타입변수: 나만의타입 = '스트링';

const 이준우: 사람 = {
  name: '이준우',
  age: 1,
  팔다리: 4,
};

const 배열2: Member = [1, 2, 3, 'sdfsdf', 4, 5, 6, 'asdf', 'fewfwfe'];

type 지금객체 = {
  [key: string]: string;
};

const 객체2: 지금객체 = {
  아무거나: 'string',
  추가: '123',
  문자: '여러개',
};

//victormeredith.tistory.com/153

const 함수 = (a: number, b: number) => {
  return a + b;
};

const [state, setState] = useState<boolean>(true);

export {};

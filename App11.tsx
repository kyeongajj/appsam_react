import styled from '@emotion/styled';
import { useState, useRef, Children } from 'react';
import { Button, Input, Box } from '@mui/material';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CommonModal from './components/common/modal/CommonModal';
import NewButton from './components/common/NewButton';

export const StyledButton = styled(Button)((props: { bg: string }) => {
  return {
    // background: '#ccc' //Button의 기본컬러 선언.
    background: props.bg, //StyledButton를 각각 색상조정하고 싶을때 선언.
    color: '#123456',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    '&:hover': {
      background: '#FF5A5F',
    },
  };
});

function App() {
  console.log('App.tsx 재렌더링이에요!');

  const [count, setCount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [inputState, setInputState] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState, //State를 비워라(초기값으로).
      [e.target.name]: e.target.value,
      //input의 입력값을 state 객체의 key값으로 지정한다.
      //ex) input : 입력값;
      //input의 value를 "e.target.name"의 key값으로.
    });
  };
  //<input type="text" name="username" placeholder="사용자명" value="{this.state.username}" onChange={this.state.handleChange}>

  console.log('key : ' + Object.values(inputState));
  //input에 입력된 값들 "inputState객체의 value" 값들 콘솔창 출력

  const textRef = useRef<HTMLInputElement>(null);

  const onClickRefButton = () => {
    if (textRef.current !== null) {
      console.log(textRef.current); //콘솔창 : <input>
      textRef.current.value = '';
      //textRef.current.focus(); 포커스가 되면 value값이 비어진다.(useRef의바람직한사용.)
    }
  };

  return (
    <div className="App">
      <Header count={count} setCount={setCount} bg={'lightblue'} />
      Body입니다
      {/* 카운터 만들기  */}
      <div>Counter : {count}</div>
      <StyledButton bg={'#D0A9F5'} onClick={() => setCount(count + 1)}>
        {' '}
        + 버튼{' '}
      </StyledButton>
      <StyledButton
        bg={'#F5A9F2'} //StyledButton 칼라 props로 전달.
        onClick={() => setCount((state) => state - 1)}
      >
        - 버튼
      </StyledButton>
      <StyledButton bg={'#F7819F'} onClick={() => setIsModalOpen(true)}>
        모달 켜기
      </StyledButton>
      {/* styledComponent에 props 전달하기  */}
      <NewButton
        onClick={() => console.log('NewButton.tsx-onClick!')}
        text={'뉴버튼이지'}
        size={'small'}
      />
      {/* useState 객체로 input 상태 관리하기 */}
      <Box>
        input1 : <Input name={'input1'} onChange={handleInputChange} />
        input2 : <Input name={'input2'} onChange={handleInputChange} />
        input3 : <Input name={'input3'} onChange={handleInputChange} />
        input4 : <Input name={'input4'} onChange={handleInputChange} />
      </Box>
      <Box>
        input1의 key : {inputState.input1}
        <br />
        input2의 key : {inputState.input2}
        <br />
        input3의 key : {inputState.input3}
        <br />
        input4의 key : {inputState.input4}
        <br />
      </Box>
      {/* useRef  */}
      <input ref={textRef} />
      <Button onClick={onClickRefButton}>
        이 버튼을 누르면 input이 초기화됩니다.
      </Button>
      <Footer />
      {/* <CommonModal /> */}
      {isModalOpen && (
        <CommonModal
          setIsModalOpen={setIsModalOpen}
          aText={'a'}
          bText={'b'}
          cNumber={3}
          title={'변할수 있는 모달 제목입니다.'}
        />
      )}
    </div>
  );
}

export default App;

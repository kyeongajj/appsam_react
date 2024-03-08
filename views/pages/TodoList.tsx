import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import styled from '@emotion/styled';

const TodoListHeader = styled(Box)({
  display: 'flex',
});
const TodoListBody = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const data = [
  {
    id: 1,
    todo: '코딩하기',
    done: false,
  },
  {
    id: 2,
    todo: '밥먹기',
    done: false,
  },
  {
    id: 3,
    todo: '공부하기',
    done: false,
  },
];

interface TodoItemProps {
  id: number;
  todo: string;
  done: boolean;
  onClick: () => void;
  onDelete: () => void;
}

const TodoItem = (item: TodoItemProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        '& div': { display: 'flex', alignItems: 'center' },
      }}
    >
      <Box sx={{ width: '100px' }}>{item.id}</Box>
      <Box
        sx={{
          width: '200px',
          textDecoration: item.done ? 'line-through' : 'none',
        }}
      >
        {item.todo}
      </Box>
      <Box sx={{ width: '100px' }} onClick={item.onClick}>
        {item.done ? 'O' : 'X'}
      </Box>
      <Box sx={{ width: '100px' }}>
        <Button onClick={item.onDelete}>삭제하기</Button>
      </Box>
    </Box>
  );
};

const Todolist = () => {
  const [todos, setTodos] = useState(data); //data오브젝트 값.을 state로 선언.
  const [inputText, setInputText] = useState(''); //input으로 입력되는 값
  const [idCount, setIdCount] = useState(4); //4로 시작하는 id값

  //createTodo함수
  const createTodo = () => {
    if (inputText === '') {
      alert('할일을 입력해주세요!');
      return;
    } //variation

    const newTodo = {
      id: idCount,
      todo: inputText,
      done: false,
    };

    setTodos([...todos, newTodo]); //기존 todos에 newTodo를 합친다.
    setInputText(''); //클릭하면, Input란은 비우기.
    setIdCount((a) => a + 1); //추가된 리스트 id값 1더하기.
  };

  const updateTodo = (id: number) => {
    const newTodos = todos.map((a) => {
      if (a.id === id) {
        a.done = !a.done; //id 같으면, done을 true로 해준다.
      }
      return a;
    });

    setTodos(newTodos);
  };
  const DeleteTodo = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id); //data.id와 같지않는것만 newTodos에 담는다.
    setTodos(newTodos);
  };

  return (
    <Box
      sx={{
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ marginBottom: '30px' }}>TodoList_내꺼</h1>

      <Box sx={{ display: 'flex', mb: '20px' }}>
        <Input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <Button onClick={createTodo}>추가하기</Button>
      </Box>

      {/* 표제목 */}
      <TodoListHeader>
        <Box sx={{ width: '100px' }}>id</Box>
        <Box sx={{ width: '200px' }}>할일</Box>
        <Box sx={{ width: '100px' }}>실행여부</Box>
        <Box sx={{ width: '100px' }}>삭제하기</Box>
      </TodoListHeader>
      {/* 표리스트:한줄 */}
      <TodoListBody>
        {todos.map((a) => {
          return (
            <React.Fragment key={a.id}>
              <TodoItem
                id={a.id}
                todo={a.todo}
                done={a.done}
                onClick={() => updateTodo(a.id)}
                onDelete={() => DeleteTodo(a.id)}
              />
            </React.Fragment>
          );
        })}
      </TodoListBody>
    </Box>
  );
};
export default Todolist;

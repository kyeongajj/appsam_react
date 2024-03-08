import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import styled from '@emotion/styled';

const TodoListHeader = styled(Box)({
  display: 'flex',
});

const TodoListBody = styled(Box)({});

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

const TodoListCopy = () => {
  const [todos, setTodos] = useState(data);
  const [inputText, setInputText] = useState('');
  const [idCount, setIdCount] = useState(4);

  const createTodo = () => {
    if (inputText === '') {
      alert('할일을 입력해주세요');
      return;
    }

    const newTodo = {
      id: idCount,
      todo: inputText,
      done: false,
    };

    setTodos([...todos, newTodo]);

    setInputText('');

    setIdCount((state) => state + 1);
  };

  const updateTodo = (id: number) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });

    setTodos(newTodos);
  };

  const DeleteTodo = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id);
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
      <h1 style={{ marginBottom: '30px' }}>TodoList</h1>

      <Box sx={{ display: 'flex', mb: '20px' }}>
        <Input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button onClick={createTodo}>추가하기</Button>
      </Box>

      <TodoListHeader>
        <Box sx={{ width: '100px' }}>id</Box>
        <Box sx={{ width: '200px' }}>할일</Box>
        <Box sx={{ width: '100px' }}>실행여부</Box>
        <Box sx={{ width: '100px' }}>삭제하기</Box>
      </TodoListHeader>
      <TodoListBody>
        {todos.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <TodoItem
                id={item.id}
                todo={item.todo}
                done={item.done}
                onClick={() => updateTodo(item.id)}
                onDelete={() => DeleteTodo(item.id)}
              />
            </React.Fragment>
          );
        })}
      </TodoListBody>
    </Box>
  );
};

// CRUD
// Create O
// Read O
// Update O
// Delete O

// 다음시간 과제 (꼭 반드시 완성까지는 안해도 됩니다. 도전! 해봅시다.)
// 1. 게시판 만들기
// 2. 게시판에는 제목, 내용, 작성자, 작성일(new Date()로 받아서 포맷팅까지 한글로 해봅시다.) 이 있어야합니다.
// 3. 글작성화면, 수정화면이 있어야합니다. (동일하면 더 좋습니다.)
// 4. 삭제버튼이 있어야합니다.
// 5. 리스트와 상세화면이 있어야합니다. (리스트에서 클릭하면 상세로 넘어갑니다.)

export default TodoListCopy;

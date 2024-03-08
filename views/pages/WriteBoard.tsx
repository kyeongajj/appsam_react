//WriteBoard
import { Box, Button, Input } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EditNoteIcon from '@mui/icons-material/EditNote';
import styled from '@emotion/styled';
import { useState } from 'react';
import React from 'react';

const data = [
  {
    id: 1,
    title: 'React',
    writer: '총명이',
    desc: '우리는 리액트를 한다!',
    date: 20240307,
  },
  {
    id: 2,
    title: 'JavaScript',
    writer: '이쁜이',
    desc: '우리는 자바스크립트를 한다!',
    date: 20240308,
  },
  {
    id: 3,
    title: 'Vue',
    writer: '똑똑이',
    desc: '우리는 뷰~를 한다!',
    date: 20240309,
  },
];
const BoxDiv = styled(Box)({
  width: '100%',
  margin: '0 auto',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const WriteBoardHeader = styled(Box)({
  background: '#F6CED8',
  width: '1200px',
  height: '60px',
  borderBottom: '1px solid #FE2E64',
  display: 'flex',
  justifyContent: 'center',
  color: '#B40431',
});

const WriteBoarList = styled(Box)({
  background: '#fff',
  width: '1200px',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#424242',
});

const WriteBoardFooter = styled(Box)({
  background: '#E6E6E6',
  width: '1200px',
  height: '100px',
  borderTop: '1px solid #848484',
  padding: '40px 0 0 0',
  fontSize: '11px',
  color: '#848484',
  textAlign: 'center',
});

interface WriteBoardType {
  id: number;
  title: string;
  writer: string;
  desc: string;
  date: number;
  DeleteWrite: () => void;
}

//WriteBoardItem//
const WriteBoardItem = (state: WriteBoardType) => {
  return (
    <WriteBoarList>
      <Box sx={{ width: '50px', mr: '5%' }}>
        <p>{state.id}</p>
      </Box>
      <Box sx={{ width: '100px', mr: '5%' }}>
        <p>{state.title}</p>
      </Box>
      <Box sx={{ width: '100px', mr: '5%' }}>
        <p>{state.writer}</p>
      </Box>
      <Box sx={{ width: '250px', mr: '5%' }}>
        <p>{state.desc}</p>
      </Box>
      <Box sx={{ width: '50px', mr: '5%' }}>
        <p>{state.date}</p>
      </Box>
      <Box sx={{ width: '100px', mr: '2%' }}>
        <Button
          onClick={state.DeleteWrite}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Box>
      <Box sx={{ width: '100px' }}>
        <Button
          onClick={state.DeleteWrite}
          variant="contained"
          startIcon={<EditNoteIcon />}
        >
          Edit
        </Button>
      </Box>
    </WriteBoarList>
  );
}; //WriteBoardItem//

//<WriteBoard />//
const WriteBoard = () => {
  const [state, setState] = useState(data);
  const [isWriteOpen, setIsWriteOpen] = useState<boolean>(false);

  const [idx, setIdx] = useState(4);
  const [inputBoardText, setInputBoardText] = useState({
    BoardTextTitle: '',
    BoardTextName: '',
    BoardTextDesc: '',
  });
  const { BoardTextTitle, BoardTextName, BoardTextDesc } = inputBoardText;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputBoardText({
      ...inputBoardText,
      [name]: value,
    });
  };

  const CreateWrite = () => {
    const newData = {
      id: idx, //input입력값
      title: BoardTextTitle, //input입력값
      writer: BoardTextName, //input입력값
      desc: BoardTextDesc, //input입력값
      date: 20240307,
    };

    setState([...state, newData]);
    setInputBoardText({
      BoardTextTitle: '',
      BoardTextName: '',
      BoardTextDesc: '',
    });
    setIdx((a) => a + 1);
  };

  const DeleteWrite = (id: number) => {
    const newData = state.filter((a) => a.id !== id);
    setState(newData);
  };

  return (
    <BoxDiv>
      <h1>React_게시판</h1>
      <BoxDiv>
        <Button
          variant="contained"
          size="large"
          startIcon={<BorderColorIcon />}
          sx={{ left: '-35%', bottom: '20px' }}
          onClick={() => {
            setIsWriteOpen(true);
          }}
        >
          글쓰기
        </Button>
        {isWriteOpen && (
          <>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ display: 'flex', mb: '30px' }}>
                <Box>
                  <span>제목</span>
                  <Input
                    type="text"
                    name="BoardTextTitle"
                    value={BoardTextTitle}
                    onChange={onChange}
                  />
                </Box>
                <Box>
                  <span>작성자</span>
                  <Input
                    type="text"
                    name="BoardTextName"
                    value={BoardTextName}
                    onChange={onChange}
                  />
                </Box>
              </Box>
              <Box>
                <span>내용</span>
                <textarea
                  cols={50}
                  rows={10}
                  name="BoardTextDesc"
                  value={BoardTextDesc}
                  onChange={onChange}
                />
              </Box>
              <br />
              <Box
                sx={{
                  width: '200px',
                  mb: '8%',
                  position: 'absolute',
                  right: '-40%',
                  bottom: '0%',
                }}
              >
                <Button
                  variant="outlined"
                  onClick={CreateWrite}
                  sx={{ mr: '3%' }}
                >
                  등록
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsWriteOpen(false);
                  }}
                >
                  닫기
                </Button>
              </Box>
            </Box>
          </>
        )}
      </BoxDiv>
      <WriteBoardHeader>
        <Box sx={{ width: '50px', mr: '5%' }}>
          <strong style={{ lineHeight: '60px' }}>번호</strong>
        </Box>
        <Box sx={{ width: '100px', mr: '5%' }}>
          <strong style={{ lineHeight: '60px' }}>제목</strong>
        </Box>
        <Box sx={{ width: '100px', mr: '5%' }}>
          <strong style={{ lineHeight: '60px' }}>작성자</strong>
        </Box>
        <Box sx={{ width: '250px', mr: '5%' }}>
          <strong style={{ lineHeight: '60px' }}>내용</strong>
        </Box>
        <Box sx={{ width: '50px', mr: '5%' }}>
          <strong style={{ lineHeight: '60px' }}>작성일</strong>
        </Box>
        <Box sx={{ width: '100px', mr: '2%' }}>
          <strong style={{ lineHeight: '60px' }}></strong>
        </Box>
        <Box sx={{ width: '100px' }}>
          <strong style={{ lineHeight: '60px' }}></strong>
        </Box>
      </WriteBoardHeader>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {state.map((a, i) => {
          return (
            <React.Fragment key={i}>
              <WriteBoardItem
                id={a.id}
                title={a.title}
                writer={a.writer}
                desc={a.desc}
                date={a.date}
                DeleteWrite={() => DeleteWrite(a.id)}
              />
            </React.Fragment>
          );
        })}
      </Box>
      <WriteBoardFooter>
        <span>COPYRIGHT 2024.03.07 ALL RIGHTS ARE RESERVED.</span>
      </WriteBoardFooter>
    </BoxDiv>
  );
}; //<WriteBoard />//

export default WriteBoard;

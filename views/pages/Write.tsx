import { Box, Input, Button } from '@mui/material';
import { useState } from 'react';

interface writeType {
  // state: string;
  state2: {
    id: number;
    title: string;
    writer: string;
    desc: string;
    date: number;
  };
  setState2: () => void;
  setIsWriteOpen: (a: boolean) => void;
}
const Write = (props: writeType) => {
  // const [state2, setSetstate2] = useState(props.state);
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

    // props.setState([newData]);
    setInputBoardText({
      BoardTextTitle: '',
      BoardTextName: '',
      BoardTextDesc: '',
    });
    setIdx((a) => a + 1);
  };

  return (
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
        <Button variant="outlined" onClick={CreateWrite} sx={{ mr: '3%' }}>
          등록
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            props.setIsWriteOpen(false);
          }}
        >
          닫기
        </Button>
      </Box>
    </Box>
  );
};

export default Write;

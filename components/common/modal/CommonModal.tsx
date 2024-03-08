import { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import ModalLayout from './ModalLayout';

const Dimmed = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100,
});

const CustomModal = styled(Box)({
  background: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  width: '300px',
  height: '200px',
});

interface CommonModalProps {
  setIsModalOpen: (state: boolean) => void;
  aText: string;
  bText: string;
  cNumber: number;
  title: string;
}

const CommonModal = (props: CommonModalProps) => {
  const [age, setAge] = useState<number>(10);

  const handleChange = (event: any) => {
    setAge(event.target.value as number);
  };

  return (
    <Dimmed>
      <ModalLayout title={props.title} setIsModalOpen={props.setIsModalOpen}>
        <>
          <p>모달 내용입니다</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </>
      </ModalLayout>
    </Dimmed>
  );
};

export default CommonModal;

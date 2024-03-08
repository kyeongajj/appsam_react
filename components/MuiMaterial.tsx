import { Box, Button, Input } from '@mui/material';
import styled from '@emotion/styled';

const StyledComponent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'lightblue',
  width: '500px',
  height: '500px',
});

const MuiMaterial = () => {
  return (
    <Box>
      <StyledComponent />
      <Button> Mui 기본 버튼</Button>
      <Input />
    </Box>
  );
};

export default MuiMaterial;

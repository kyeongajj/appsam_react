import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

interface btnType {
  size: string;
}
const ButtonBlueStyle = styled(Button)((props: btnType) => {
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '200px',
    height: '40px',
    backgroundColor: 'red',
    border: '4px solid',
    borderRadius: '20px',
    textAlign: 'center',
    margin: '20px',
    // fontSize: '14px',

    width:
      props.size === 'large'
        ? '250px'
        : props.size === 'small'
          ? '150px'
          : '200px',
    fontSize:
      props.size === 'large'
        ? '16px'
        : props.size === 'small'
          ? '12px'
          : '14px',
  };
});

const ButtonBlue = (props: btnType) => {
  return (
    <Box>
      <ButtonBlueStyle size={'small'}>블루버튼</ButtonBlueStyle>
    </Box>
  );
};
export default ButtonBlue;

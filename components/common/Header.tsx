import styled from '@emotion/styled';
import { StyledButton } from '../../App11';

const CustomHeader = styled('header')(() => {
  return {
    padding: '0px 10px',
    backgroundColor: 'lightblue',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      background: '#F7819F',
    },
    '& > h1': {
      margin: '0px',
      fontSize: '40px',
      color: '#123456',
    },
  };
});

const Header = (props: {
  count: number;
  setCount: (state: number) => void;
  bg: string;
}) => {
  return (
    <CustomHeader>
      <h1>Header</h1>
      Count : {props.count}
      <StyledButton
        onClick={() => props.setCount(props.count + 1)}
        bg={'lightblue'} //StyledButton 칼라 props로 전달.
        sx={{ border: '3px solid #fff', marginLeft: '200px' }}
      >
        여기도 + 버튼 있지롱
      </StyledButton>
    </CustomHeader>
  );
};

export default Header;

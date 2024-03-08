import { Button } from '@mui/material';
import styled from '@emotion/styled';

//type : props로 받는 변수 type선언.
interface ButtonProps {
  onClick: () => void;
  text: string;
  size?: string;
  number?: number;
  background?: string;
}

//style-component 커스터마이징 : css변수 지정하여 선언.
const StyledTestButton = styled(Button)((props: {
  size?: string; //App.tsx
  bg?: string; //App.tsx
  height?: string; //새로 지정한 css변수
}) => {
  return {
    width: props.size === 'small' ? '100px' : '150px', //App.tsx
    background: props.size === 'large' ? '#123456' : 'pink', //App.tsx
    height: props.height ? props.height : '80px', //새로 지정한 css변수
    //mui-button custom
    '&:hover': {
      backgroundColor: 'rgba(25, 118, 210, 0.6)',
    },
    color: '#fff',
  };
});

const NewButton = (props: ButtonProps) => {
  //interface : ButtonProps
  return (
    <StyledTestButton
      size={'large'}
      height={'50px'}
      onClick={props.onClick}
      sx={{
        // background: props.background ? props.background : 'yellow',
        width: props.size === 'small' ? '200px' : '500px',
      }}
    >
      {props.text}
      {props.number ? props.number : 0}
    </StyledTestButton>
  );
};

export default NewButton;

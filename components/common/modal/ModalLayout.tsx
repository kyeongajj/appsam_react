import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

const LayoutBox = styled(Box)({
  width: '800px',
  height: '500px',
  background: '#fff',
  padding: '20px',
  borderRadius: '10px',
});

const ModalTitle = styled('h1')({
  fontSize: '25px',
  color: 'red',
  marginBottom: '20px',
  borderBottom: '1px solid #e0e0e0',
});

const ModalBody = styled(Box)({
  padding: '20px',
});

const ModalCloseButton = styled(Button)({
  fontSize: '16px',
  padding: '10px 20px',
  borderRadius: '5px',
  background: 'red',
  color: '#fff',
});

interface ModalLayoutProps {
  title: string;
  children: React.ReactElement;
  setIsModalOpen: (state: boolean) => void;
}

const ModalLayout = (props: ModalLayoutProps) => {
  return (
    <LayoutBox>
      <ModalTitle>{props.title}</ModalTitle>
      <ModalBody>{props.children}</ModalBody>
      <ModalCloseButton onClick={() => props.setIsModalOpen(false)}>
        닫기
      </ModalCloseButton>
    </LayoutBox>
  );
};

export default ModalLayout;

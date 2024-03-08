import styled from '@emotion/styled';
import ButtonBlue from './ButtonBlue';

const CustomFooter = styled('footer')({
  position: 'relative',
  padding: '0px 10px',
  backgroundColor: 'pink',
  color: '#fff',
  height: '100px',
});

const Footer = () => {
  return (
    <>
      <CustomFooter>이거는 Footer에요</CustomFooter>
      <ButtonBlue size={'small'} />
    </>
  );
};

export default Footer;

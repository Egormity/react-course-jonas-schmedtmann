import styled from 'styled-components';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const StyledLogo = styled.div`
  text-align: center;
  cursor: pointer;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  return (
    <StyledLogo onClick={() => navigate('/dashboard')}>
      <Img src={isDarkMode ? '/logo-dark-mode.png' : '/logo-light-mode.png'} alt='Logo' />
    </StyledLogo>
  );
}

export default Logo;

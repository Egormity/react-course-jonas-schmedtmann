import styled from 'styled-components';

const FullPageStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  /* background-color: var(--color-grey-50); */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FullPage({ children }) {
  return <FullPageStyled>{children}</FullPageStyled>;
}

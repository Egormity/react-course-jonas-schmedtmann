import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';
import { useUser } from '../features/authentication/useUser';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: 1fr max-content max-content;
  align-items: center;
`;

export default function Header() {
  const { isAdmin } = useUser();

  return (
    <StyledHeader>
      <p style={{ color: 'var(--color-grey-500)' }}>
        {isAdmin ? 'You have full access 😊' : 'You have read-only access 😌'}
      </p>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

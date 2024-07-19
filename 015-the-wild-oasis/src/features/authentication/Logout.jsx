import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import ButtonIcon from '../../ui/ButtonIcon';
import { useLogout } from './useLogout';
import Spinner from '../../ui/Spinner';
import FullPage from '../../ui/FullPage';

export default function Logout() {
  const { logout, isLoading } = useLogout();

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

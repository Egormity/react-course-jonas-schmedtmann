import { useEffect } from 'react';

import Spinner from '../../ui/Spinner';
import { useUser } from './useUser';
import { useNavigate } from 'react-router-dom';
import FullPage from '../../ui/FullPage';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //--- 1. LOAD THE AUTHENTICATED USER ---//
  const { isLoading, isAuthenticated } = useUser();

  //--- 2. IF NO AUTHENTICATED USER, REDIRECT TO LOGIN PAGE ---//
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate(-1);
  }, [isAuthenticated, isLoading, navigate]);

  //--- 3 .WHILE LOADING, SHOW SPINNER ---//
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //--- 4. IF THERE IS A USER, RENDER THE APP ---//
  if (isAuthenticated) return children;
}

import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: user => {
      console.log(user);
      // toast.success(
      //   `Account successfully created. Please verify newly created account from the user's address`
      // );
      toast.success(`Account successfully created!`);
    },
    onError: err => {
      console.error(`!!!!! ${err} !!!!!`);
      toast.error(
        err.message === 'User already registered' ? 'This email has already been registered' : err.message
      );
    },
  });

  return { signup, isLoading };
}

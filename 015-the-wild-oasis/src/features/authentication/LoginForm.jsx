import { useState } from 'react';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import FormRowVertical from '../../ui/FormRowVertical';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';

export default function LoginForm() {
  const userLoginData = JSON.parse(localStorage.getItem('user-login-data'));
  const [email, setEmail] = useState(userLoginData?.email || 'user@example.com');
  const [password, setPassword] = useState(userLoginData?.password || '1234567890');

  // const [email, setEmail] = useState('admin@example.com');
  // const [password, setPassword] = useState('1234567890-=');

  const { login, isLoading } = useLogin();

  const isHappening = isLoading;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
        onSuccess: () => {
          localStorage.setItem('user-login-data', JSON.stringify({ email, password }));
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address' orientation='vertical'>
        <Input
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isHappening}
          placeholder='Your email'
        />
      </FormRowVertical>

      <FormRowVertical label='Password' orientation='vertical'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={isHappening}
          placeholder='Your password'
        />
      </FormRowVertical>
      <FormRow orientation='vertical'>
        <Button size='large' disabled={isHappening}>
          {!isLoading ? 'Login' : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

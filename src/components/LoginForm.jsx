import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the login form
const LoginFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Login form component
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Dummy login logic, you should replace this with actual authentication logic
    if (username === 'example' && password === 'password') {
      alert('Login successful!');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <LoginFormContainer>
      <h2>Login</h2>
      <FormField>
        <Label>Username:</Label>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormField>
      <FormField>
        <Label>Password:</Label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormField>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton onClick={handleLogin}>Login</SubmitButton>
    </LoginFormContainer>
  );
};
export default LoginForm;

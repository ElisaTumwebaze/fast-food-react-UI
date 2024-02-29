import React from 'react';
import styled from 'styled-components';

// Styled components
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const LoginFormComponent = ({ handleSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event.target.elements.username.value, event.target.elements.password.value);
  };

  return (
    <LoginWrapper>
      <h2>Login</h2>
      <LoginForm onSubmit={handleFormSubmit}>
        <FormInput type="text" id="username" name="username" placeholder="Username" autoComplete='off'/>
        <FormInput type="password" id="password" name="password" placeholder="Password"  autoComplete='off'/>
        <FormButton type="submit">Login</FormButton>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginFormComponent;
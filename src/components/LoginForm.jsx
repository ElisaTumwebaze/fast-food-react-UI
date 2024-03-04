import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

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
const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (username.trim() === "") {
      errors.username = "Username is required";
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        setIsLoading(false);
        const { token } = await response.json();
        localStorage.setItem("token", token);
        console.log("Form submitted:", { username, password });
        navigate("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Login error:", error);
    }
  };

  return (
    <LoginFormContainer>
      {isLoading && <Spinner />}
      <h2>Login</h2>
      <FormField>
        <Label>Username:</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}
      </FormField>
      <FormField>
        <Label>Password:</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
      </FormField>
      <SubmitButton onClick={handleLogin}>Login</SubmitButton>
    </LoginFormContainer>
  );
};
export default LoginForm;

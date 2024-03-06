import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";


const SignupFormContainer = styled.div`
  background: #fff;
  box-shadow: 0px 12px 20px rgb(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  margin-top:20px;
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
  width: 95%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
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
const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-left: 10px;
`;

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        setIsLoading(false);
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      if (response.status === 201) {
        setIsLoading(false);
        const { token } = await response.json();
        localStorage.setItem("token", token);
        navigate("/dashboard");
        toast.success("login Successfully");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <SignupFormContainer>
      {isLoading && <Spinner />}
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>Username:</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormField>
        <SubmitButton type="submit">Signup</SubmitButton>
        <StyledLink to="/login">Already have an account Login</StyledLink>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </SignupFormContainer>
  );
};

export default SignupForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner";
import {
  FormContainer,
  FormField,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  StyledLink,
} from "../signupForm/Styles";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (formData.username.trim() === "") {
      errors.username = "Username is required";
    }

    if (formData.password.trim() === "") {
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
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        setIsLoading(false);
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      if (response.status === 200) {
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
    <FormContainer>
      {isLoading && <Spinner />}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <FormField>
          <Label>Username:</Label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormField>
        <SubmitButton type="submit">Login</SubmitButton>
        <StyledLink to="/signup">Do not have an acount Create</StyledLink>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </FormContainer>
  );
};
export default LoginForm;

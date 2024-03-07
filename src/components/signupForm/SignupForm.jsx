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
  StyledLink
} from "./Styles";

const SignupForm = () => {
  const[errors,setErrors] = useState({})
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isLoading: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};
const handleLoading = (isLoading)=>{
  setFormData(prevState => ({...prevState, isLoading: isLoading}))
}

  const navigate = useNavigate();

  const validateForm = () => {

    const ValidationErrors = {};
    if (!formData.username.trim()) {
      ValidationErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      ValidationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      ValidationErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      ValidationErrors.password= "Password is required";
    } else if (formData.password.length < 6) {
      ValidationErrors.password= "Password must be at least 6 characters long";
    }

    setErrors(ValidationErrors)

    return Object.keys(ValidationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      handleLoading(true)
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        handleLoading(false);
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      if (response.status === 201) {
        handleLoading(false)
        const { token } = await response.json();
        localStorage.setItem("token", token);
        navigate("/dashboard");
        toast.success("login Successfully");
      }
    } catch (error) {
      handleLoading(false)
      toast.error(error.message);
    }
  };

  return (
    <FormContainer>
      {formData.isLoading && <Spinner />}
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
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
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Password:</Label>
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormField>
        <SubmitButton type="submit">Signup</SubmitButton>
        <StyledLink to="/login">Already have an account Login</StyledLink>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </FormContainer>
  );
};

export default SignupForm;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  background: #fff;
  box-shadow: 0px 12px 20px rgb(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  margin-top:20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const FormField = styled.div`

  margin-bottom: 20px;
`;

 export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-left: 10px;
`;
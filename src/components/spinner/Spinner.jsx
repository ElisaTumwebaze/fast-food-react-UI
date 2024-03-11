import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the animation
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Define the styled component for the spinner
const SpinnerContainer = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 0.8s linear infinite;
`;

// Create the Spinner component
const Spinner = () => {
  return <SpinnerContainer />;
};

export default Spinner;

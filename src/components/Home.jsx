// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-left: 10px;
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Fast-Foods-Fast</Title>
      <p>Please <StyledLink to="/login">login</StyledLink> or <StyledLink to="/signup">signup</StyledLink> to continue.</p>
    </Container>
  );
}

export default Home;

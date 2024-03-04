// Dashboard.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const SideNav = styled.div`
  width: 250px;
  background-color: #333;
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  color: #333;
`;

const Dashboard = () => {
  return (
    <Container>
      <SideNav>
        <h2 style={{ color: '#fff' }}>Side Navigation</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Link 1</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Link 2</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Link 3</a>
          </li>
        </ul>
      </SideNav>
      <MainContent>
        <Header>Welcome Fast-Food-Fast</Header>
        <p>This is the main content area. You can put your content here.</p>
      </MainContent>
    </Container>
  );
};

export default Dashboard;

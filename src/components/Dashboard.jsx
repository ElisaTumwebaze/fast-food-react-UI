import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCartShopping, faBowlFood, faSignOut, faEdit} from '@fortawesome/free-solid-svg-icons';

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;
const Sidebar = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
  height: 100%;
`;

const MenuItem = styled.div`
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: lightblue;
  }
`;

// Dashboard component
const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        <MenuItem>
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
          Home
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          Profile
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faBowlFood} style={{ marginRight: '10px' }} />
          Menu
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faEdit} style={{ marginRight: '10px' }} />
          Update Menu
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '10px' }} />
          Order
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faSignOut} style={{ marginRight: '10px' }} />
          Signout
        </MenuItem>
      </Sidebar>
      <MainContent>
        <h1>Welcome To Fast Food Fast</h1>
        <p>This is the main content of the dashboard.</p>
      </MainContent>
    </Container>
  );
};

export default Dashboard;

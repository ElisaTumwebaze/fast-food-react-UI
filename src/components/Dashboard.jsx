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
const StyledIcon = styled(FontAwesomeIcon)`
    color: #f98f39; 
    font-size: 24px;
    margin-right: 10px; 
`;

// Dashboard component
const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        <MenuItem>
          <StyledIcon icon={faHome} />
          Home
        </MenuItem>
        <MenuItem>
          <StyledIcon icon={faUser} />
          Profile
        </MenuItem>
        <MenuItem>
          <StyledIcon icon={faBowlFood} />
          Menu
        </MenuItem>
        <MenuItem>
          <StyledIcon icon={faEdit}  />
          Update Menu
        </MenuItem>
        <MenuItem>
          <StyledIcon icon={faCartShopping} />
          Order
        </MenuItem>
        <MenuItem>
          <StyledIcon icon={faSignOut} />
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

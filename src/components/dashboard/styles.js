import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const Button = styled.button`
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Sidebar = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
  height: 100%;
`;

export const MenuItem = styled.div`
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: lightblue;
  }
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  color: #f98f39;
  font-size: 24px;
  margin-right: 10px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHead = styled.th`
  background-color: #54585d;
  color: #ffffff;
  font-weight: bold;
  text-align: left;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #f98f39;
`;

export const TableData = styled.td`
  border: 1px solid #f98f39;
  padding: 8px;
  text-align: left;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius:50%;
`;
import React,{useState,useEffect} from 'react';
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

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHead = styled.th`
background-color: #54585d;
color: #ffffff;
font-weight: bold;
padding: 8px;
font-size: 18px;
border: 1px solid #54585d;
`;

const TableData = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
`;



// Dashboard component

const Dashboard = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      let token = localStorage.getItem("token");
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/menu`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        const menuArray = jsonData.message; 
        setData(menuArray);
        console.log(jsonData);

      } catch (error) {
        console.error(error.massage);
      }
    };
    fetchData();
  },[])

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
          <StyledIcon icon={faEdit} />
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
        <p>Choose From The Menu.</p>
        <Table>
      <thead>
        <TableRow>
          <TableHead>S/N</TableHead>
          <TableHead>Photo</TableHead>
          <TableHead>Food Name</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.food_id}>
            <TableData >{item.food_id}</TableData>
            <TableData ><img src={item.photo} alt="" style={{height:"200px",width:"200px"}} /></TableData>
            <TableData>{item.food_name}</TableData>
            <TableData>{item.price}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>

      </MainContent>
    </Container>
  );
};

export default Dashboard;

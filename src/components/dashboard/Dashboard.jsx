import React, { useState } from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApiData from "./useApiData";
import ModalForm from "../modalForm/ModalForm";
import {
  faHome,
  faUser,
  faCartShopping,
  faBowlFood,
  faSignOut,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import{
  Container,
  Sidebar,
  MenuItem,
  StyledIcon,
  MainContent,
  Table,
  TableHead,
  TableData,
  TableRow,
  Image,
  Button
} from "./styles";

const Dashboard = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  const {data} = useApiData();

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
          <Button onClick={openModal}>Add Food</Button>
          <ModalForm isOpen={isOpen} closeModal={closeModal} />
        <p>Choose From The Menu.</p>
        <Table>
          <thead>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Food Name</TableHead>
              <TableHead>Price in UGX</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow key={item.food_id}>
                <TableData>{item.food_id}</TableData>
                <TableData>
                  <Image
                    src={item.photo}
                    alt=""
                  />
                </TableData>
                <TableData>{item.food_name}</TableData>
                <TableData>{item.price}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </MainContent>
      <ToastContainer position="top-right" autoClose={5000} />
    </Container>
  );
};

export default Dashboard;

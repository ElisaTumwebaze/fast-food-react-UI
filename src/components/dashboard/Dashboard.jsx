import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApiData from "./useApiData";
import ModalForm from "../modalForm/ModalForm";
import MenuModal from "../menuModal/MenuModal";
import MenuTable from "./MenuTable";
import {
  faHome,
  faUser,
  faCartShopping,
  faBowlFood,
  faSignOut,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Sidebar,
  MenuItem,
  StyledIcon,
  MainContent,
  Button,
} from "./styles";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const closeMenuModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  const { data } = useApiData();

  const handleItemClick = async (item) => {
    try {
      let token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/menu/${item.food_id}`,
        {
          method: "GET",
          headers: {
            'Authorization': `Baerer ${token}`,
          },
        }
      );
      const itemDetails = await response.json();
      setSelectedItem(itemDetails.message);
      setModalOpen(true);
    } catch (error) {
      toast.error(error.message)
    }
  };

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
        <MenuTable data={data} onItemClick={handleItemClick} />
        <MenuModal
          isOpen={modalOpen}
          onClose={closeMenuModal}
          menuItem={selectedItem}
        />
      </MainContent>
      <ToastContainer position="top-right" autoClose={5000} />
    </Container>
  );
};

export default Dashboard;

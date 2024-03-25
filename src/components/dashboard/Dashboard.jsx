import React, { useState,useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalForm from "../modalForm/ModalForm";
import MenuModal from "../menuModal/MenuModal";
import MenuTable from "./MenuTable";
import fetchData from "../helpers/fetchData";

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
  const [data, setData] = useState([]);
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

  useEffect(() => {

    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const endpoint = '/menu';
    try {
      const res = await fetchData(endpoint,{
        method:'GET'
      });
        setData(res.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAddFood = async (newData) => {
    try{
      setData([...data, newData]);
      toast.success('Food item added successfully');

    }catch(error){
      toast.error('Failed to add food item');
    }
      
  };

  const handleItemClick = async (item) => {

    try {
      const endpoint = `/menu/${item.food_id}`;
      const response = await fetchData(endpoint,{
        method:'GET'
      });

      setSelectedItem(response.message);
      setModalOpen(true);
      
    } catch (error) {
      toast.error(error.message)
    }
  };

  const handleDelete = async (food_id) => {
    try{
      const endpoint = `/menu/${food_id}`;
      const res = await fetchData(endpoint,{
          method:'DELETE'   
      })
      
        setData(data.filter(item => item.food_id !== food_id));
        toast.success(res.message)
  }
  catch(err){
      toast.error(err.error);
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
        <ModalForm isOpen={isOpen}
        onAdd={handleAddFood}
         closeModal={closeModal} />
        <p>Choose From The Menu.</p>
        <MenuTable data={data} 
        setData={setData}
        onItemClick={handleItemClick}
        onConfirmDelete={handleDelete}
         />
        <MenuModal
          isOpen={modalOpen}
          onClose={closeMenuModal}
          menuItem={selectedItem}
          onAdd={handleAddFood}
        />
      </MainContent>
      <ToastContainer position="top-right" autoClose={5000} />
    </Container>
  );
};

export default Dashboard;

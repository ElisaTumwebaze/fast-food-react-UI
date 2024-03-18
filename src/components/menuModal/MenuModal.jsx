import React from "react";
import {
  StyledModalBackdrop,
  StyledModalCard,
  ModalContent,
  CloseButton,
  FoodImage,
  FoodName,
  FoodPrice,
  OrderButton,
} from "./Styles";

const MenuModal = ({ isOpen, onClose, menuItem }) => {
  if (!isOpen || !menuItem) return null;

  return (
    <StyledModalBackdrop>
      <StyledModalCard>
        <ModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <FoodImage src={menuItem.photo} alt="photo" />
          <FoodName>{menuItem.food_name}</FoodName>
          <FoodPrice>Price: {menuItem.price} UGX</FoodPrice>
          <OrderButton>Order Now</OrderButton>
        </ModalContent>
      </StyledModalCard>
    </StyledModalBackdrop>
  );
};

export default MenuModal;

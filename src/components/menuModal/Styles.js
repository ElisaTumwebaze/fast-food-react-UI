
import styled from 'styled-components';

export const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  text-align: center;
`;

export const FoodImage = styled.img`
  width: 85%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 50%
`;

export const FoodName = styled.h3`
  margin-top: 10px;
`;

export const FoodPrice = styled.p`
  margin-top: 5px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

export const OrderButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
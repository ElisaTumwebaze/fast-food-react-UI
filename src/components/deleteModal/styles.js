import styled from 'styled-components';

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    margin-left: 10px;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button.cancel {
    background-color: #ddd;
    color: #333;
  }

  button.delete {
    background-color: #f44336;
    color: white;
  }
`;
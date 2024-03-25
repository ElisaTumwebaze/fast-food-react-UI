import React from "react";
import { ModalOverlay, ModalContent, ModalButtons } from "./styles";

const DeleteModal = ({
  item,
  onCancelDelete,
  onConfirmDelete,
}) => {


  return (
    <ModalOverlay>
      <ModalContent>
        <p>Are you sure you want to delete {item.food_name} from the Menu ?</p>
        <ModalButtons>
          <button className="cancel" onClick={onCancelDelete}>
            Cancel
          </button>
          <button className="delete" onClick={()=>onConfirmDelete(item.food_id)}>
            Delete
          </button>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteModal;

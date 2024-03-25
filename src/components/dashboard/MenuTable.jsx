import { useState } from "react";
import DeleteModal from "../deleteModal/deleteModal";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  StyledIcon,
  Table,
  TableHead,
  TableData,
  TableRow,
  Image,
} from "./styles";

const MenuTable = ({
  data,
  onItemClick,
  color,
  hoverColor,
  onConfirmDelete,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemToDelete, setSelectedItemToDelete] = useState(null);

  const handleDelete = () => {
    onConfirmDelete(selectedItemToDelete.food_id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <Table>
        <thead>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Food Name</TableHead>
            <TableHead>Price in UGX</TableHead>
            <TableHead
              color={color}
              hoverColor={hoverColor}
              style={{ textAlign: "center" }}
            >
              {<StyledIcon hoverColor="#00ff00" icon={faEdit} />}
              Edit
            </TableHead>
            <TableHead
              color={color}
              hoverColor={hoverColor}
              style={{ textAlign: "center" }}
            >
              {<StyledIcon hoverColor="#ff0000" icon={faTrash} />}
              Delete
            </TableHead>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.food_id}>
              <TableData>{item.food_id}</TableData>
              <TableData>
                <Image
                  src={item.photo}
                  alt="photo"
                  onClick={() => onItemClick(item)}
                />
              </TableData>
              <TableData>{item.food_name}</TableData>
              <TableData>{item.price}</TableData>
              <TableData
                color={color}
                hoverColor={hoverColor}
                style={{ textAlign: "center" }}
              >
                {<StyledIcon hoverColor="#00ff00" icon={faEdit} />}
              </TableData>
              <TableData
                color={color}
                hoverColor={hoverColor}
                style={{ textAlign: "center" }}
              >
                {
                  <StyledIcon
                    hoverColor="#ff0000"
                    icon={faTrash}
                    onClick={() => {
                      setSelectedItemToDelete(item);
                      setShowDeleteModal(true);
                    }}
                  />
                }
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {showDeleteModal && (
        <DeleteModal
          item={selectedItemToDelete}
          onConfirmDelete={handleDelete}
          onCancelDelete={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default MenuTable;

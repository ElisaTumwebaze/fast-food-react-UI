import {
    faEdit,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  
  import {
    StyledIcon,
    Table,
    TableHead,
    TableData,
    TableRow,
    Image,
  } from "./styles";

const MenuTable = ({data,onItemClick,color, hoverColor})=>{

    return(
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
            <TableRow key={item.food_id} onClick={() => onItemClick(item)}>
              <TableData>{item.food_id}</TableData>
              <TableData>
                <Image src={item.photo} alt="photo" />
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
                  ></StyledIcon>
                }
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>

    )
}

export default MenuTable;

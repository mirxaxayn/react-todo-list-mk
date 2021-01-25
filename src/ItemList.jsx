import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

const ItemList = (props) => {
  const [line, setLine] = useState(false);

  const itemDone = () => {
    setLine(true);
  };

  return (
    <>
      <li className='item'>
        <Tooltip title='Delete Item'>
          <button
            onClick={() => {
              props.onSelect(props.id);
            }}>
            <DeleteIcon />
          </button>
        </Tooltip>
        <Tooltip title='Item Done'>
          <button onClick={itemDone}>
            <CheckIcon style={{ color: "yellow" }} />
          </button>
        </Tooltip>
        <h2 style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.itemValue}
        </h2>
      </li>
    </>
  );
};

export default ItemList;

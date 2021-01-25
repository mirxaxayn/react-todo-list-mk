import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import ItemList from "./ItemList";

const App = () => {
  const [currItem, setCurrItem] = useState("");

  const [itemList, setItemList] = useState([]);

  const inputEvent = (e) => {
    setCurrItem(e.target.value);
  };

  const AddNewItem = (event) => {
    event.preventDefault();

    setItemList((oldValue) => {
      return [...oldValue, currItem];
    });

    setCurrItem("");
  };

  const DeleteItem = (id) => {
    setItemList((oldValue) => {
      return oldValue.filter((val, idx) => {
        return idx !== id;
      });
    });
  };

  return (
    <>
      <div className='todo-container'>
        <h1 className='main-heading'>ToDo List</h1>

        <form onSubmit={AddNewItem}>
          <input
            type='text'
            placeholder='Add an Items'
            onChange={inputEvent}
            value={currItem}
          />
          <Tooltip title='Add Item'>
            <button type='submit'>
              <AddIcon />
            </button>
          </Tooltip>
        </form>

        <ol className='item-container'>
          {itemList.map((val, idx) => {
            return (
              <ItemList
                onSelect={DeleteItem}
                key={idx}
                id={idx}
                itemValue={val}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default App;

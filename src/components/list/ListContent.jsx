import React from 'react';
import { nanoid } from 'nanoid';
import AddItem from './AddItem';
import Header from './Header';

function ListContent(props) {
  const [list, setList] = React.useState([]);

  const handleAddNewItem = (newItem) => {
    let newItemObj = {
      id: nanoid(),
      item: newItem,
    };

    setList((list) => [...list, newItemObj]);
  };

  // 3. handle delete
  const handleDeleteItem = (id) => {
    const newList = list.filter((itemObj) => itemObj.id !== id);
    setList(newList);
  };

  // 4. handle Edit
  const handleEditItem = (itemId, updateItemObj) => {
    const foundIndex = list.findIndex((itemObj) => itemObj.id === itemId);
    if (foundIndex !== -1) {
      const newList = [...list];
      newList[foundIndex] = updateItemObj;
      setList(newList);
    }
  };

  return (
    <div>
      <Header name={props.name} />
      <AddItem onAdd={handleAddNewItem} />
      {/* <List/> */}
    </div>
  );
}

export default ListContent;

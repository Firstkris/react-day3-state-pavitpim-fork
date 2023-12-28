import React from 'react';
import { nanoid } from 'nanoid';
import AddItem from './AddItem';
import Header from './Header';
import List from './List';

function ListContent(props) {
  const [list, setList] = React.useState([]);

  const handleAddNewItem = (newData) => {
    let newItemObj = {
      id: nanoid(),
      data: newData,
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
      <List 
        allList={list}
        onDelete={handleDeleteItem} 
        onEdit={handleEditItem} 
        />
    </div>
  );
}

export default ListContent;

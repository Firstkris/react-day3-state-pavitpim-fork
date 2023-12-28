import React from 'react';
import Button from '../ui/Button';

// item = {id:string, data:string}
export default function ListItem(props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState(props.item.data || '');

  const handleToggleEdit = () => {
    setIsEdit((p) => !p);
  };

  // 2. handle Edit Text
  const handleEditData = (event) => {
    setData(event.target.value);
  };

  // 3. handle Save
  const handleSaveItem = () => {
    const updateItemObj = { ...props.item, data: data };
    props.onEdit(props.item.id, updateItemObj);
    setIsEdit(false);
  };

  return (
    <li className='item__container'>
      {isEdit ? (
        <input className='item' value={data} onChange={handleEditData} />
      ) : (
        <span className='item'>{data}</span>
      )}
      {isEdit ? (
        <Button onClick={handleSaveItem}>save</Button>
      ) : (
        <Button onClick={handleToggleEdit}>edit</Button>
      )}
      <Button onClick={(e) => props.onDelete(props.item.id)}>x</Button>
    </li>
  );
}

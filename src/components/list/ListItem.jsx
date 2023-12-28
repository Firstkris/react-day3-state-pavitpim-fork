import React from 'react';

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
    <li>
      {isEdit ? <input value={data} onChange={handleEditData} /> : <span>{data}</span>}
      {isEdit ? (
        <button onClick={handleSaveItem}>save</button>
      ) : (
        <button onClick={handleToggleEdit}>edit</button>
      )}
      <button onClick={(e) => props.onDelete(props.item.id)}>x</button>
    </li>
  );
}

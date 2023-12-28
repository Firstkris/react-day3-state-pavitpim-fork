import React from 'react';

function AddItem(props) {
  const [item, setItem] = React.useState('');

  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };

  const handleAddItem = () => {
    props.onAdd(item);
    setItem('');
  };
  return (
    <>
      <input value={item} onChange={handleChangeItem} />
      <button onClick={handleAddItem}>add</button>
    </>
  );
}

export default AddItem;

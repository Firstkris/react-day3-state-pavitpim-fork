import React from 'react';
import Button from '../ui/Button';

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
      <Button onClick={handleAddItem}>add</Button>
    </>
  );
}

export default AddItem;

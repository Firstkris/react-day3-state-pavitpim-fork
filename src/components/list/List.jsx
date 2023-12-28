import ListItem from './ListItem';

function List(props) {
  const { allList, onDelete, onEdit } = props;
  return (
    <ul>
      {allList.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default List;

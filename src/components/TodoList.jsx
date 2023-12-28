import TodoItem from './TodoItem';

function TodoList(props) {
  const { todoList, onDelete, onEdit } = props;
  return (
    <ul>
      {todoList.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          todo={todoObj}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;

import React from 'react';

export default function TodoItem(props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [todo, setTodo] = React.useState(props.todo.task || '');

  // 1. handle Toggle Edit <-> Show
  const handleToggleEdit = () => {
    setIsEdit((p) => !p);
  };

  // 2. handle Edit Text
  const handleEditTodoText = (event) => {
    setTodo(event.target.value);
  };

  // 3. handle Save
  const handleSaveTodo = () => {
    const updateTodoObj = { ...props.todo, task: todo };
    props.onEdit(props.todo.id, updateTodoObj);
    setIsEdit(false);
  };

  return (
    <li>
      {isEdit ? <input value={todo} onChange={handleEditTodoText} /> : <span>{todo}</span>}
      {isEdit ? (
        <button onClick={handleSaveTodo}>save</button>
      ) : (
        <button onClick={handleToggleEdit}>edit</button>
      )}
      <button onClick={(e) => props.onDelete(props.todo.id)}>x</button>
    </li>
  );
}

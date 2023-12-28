import React from 'react';
import { nanoid } from 'nanoid';
// Src
import TodoList from './TodoList';
import HeaderList from './HeaderList';
import AddItem from './AddItem';

function TodoContent() {
  const [todoList, setTodoList] = React.useState([]);

  // 2.handle add (การสร้าง todo ใหม่) -> <button>
  const handleAddNewTodo = (newTask) => {
    let newTodoObj = {
      id: nanoid(),
      task: newTask,
      done: false,
    };

    setTodoList((currentTodoList) => [...currentTodoList, newTodoObj]);
  };

  // 3. handle delete
  const handleDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todoObj) => todoObj.id !== id);
    setTodoList(newTodoList);
  };

  // 4. handle Edit
  const handleEditTodo = (todoId, updateTodoObj) => {
    const foundIndex = todoList.findIndex((todoObj) => todoObj.id === todoId);
    if (foundIndex !== -1) {
      const newTodoList = [...todoList];
      newTodoList[foundIndex] = updateTodoObj;
      setTodoList(newTodoList);
    }
  };

  return (
    <div>
      <HeaderList name='My Todo' />
      <AddItem onAdd={handleAddNewTodo} />
      <TodoList todoList={todoList} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
    </div>
  );
}

export default TodoContent;

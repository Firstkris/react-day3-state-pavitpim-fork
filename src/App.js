// NodeModules
import React from 'react';
import { nanoid } from 'nanoid';
// Src
import TodoList from './components/TodoList';
import HeaderList from './components/HeaderList';
import AddItem from './components/AddItem';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');

  // handle Fn
  // 1.handle การพิมพ์ -> <input/>
  const handleChangeInput = (event) => {
    setNewTodo(event.target.value);
  };

  // 2.handle add (การสร้าง todo ใหม่) -> <button>
  const handleAddNewTodo = (newTask) => {
    let newTodoObj = {
      id: nanoid(),
      task: newTask,
      done: false,
    };

    setTodoList((currentTodoList) => [...currentTodoList, newTodoObj]);
    setNewTodo('');
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

export default App;

// NodeModules
import React from 'react';
import { nanoid } from 'nanoid';
// Src
import TodoItem from './components/TodoItem';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');

  // handle Fn
  // 1.handle การพิมพ์ -> <input/>
  const handleChangeInput = (event) => {
    setNewTodo(event.target.value);
  };

  // 2.handle add (การสร้าง todo ใหม่) -> <button>
  const handleAddNewTodo = () => {
    let newTodoObj = {
      id: nanoid(),
      task: newTodo,
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

  const todoRender = todoList.map((todoObj) => (
    <TodoItem key={todoObj.id} todo={todoObj} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
  ));
  return (
    <div>
      <h1>My Todo</h1>
      <input value={newTodo} onChange={handleChangeInput} />
      <button onClick={handleAddNewTodo}>add</button>
      <ul>{todoRender}</ul>
    </div>
  );
}

export default App;

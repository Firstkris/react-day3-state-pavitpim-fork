import React from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todoList, setTodoList] = React.useState(['HW', 'Hangout']);
  const [newTodo, setNewTodo] = React.useState('');

  // handle Fn
  // 1.handle การพิมพ์ -> <input/>
  const handleChangeInput = (event) => {
    setNewTodo(event.target.value);
  };

  // 2.handle add (การสร้าง todo ใหม่) -> <button>
  const handleAddNewTodo = () => {
    setTodoList((currentTodoList) => [...currentTodoList, newTodo]);
    setNewTodo('');
  };

  // 3. handle delete
  const handleDeleteTodo = (idx) => {
    // update state แบบ callback
    setTodoList((curr) => curr.filter((todo, index) => index !== idx));
  };

  const handleEditTodo = (idx, updateValue) => {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1, updateValue);
    setTodoList(newTodoList);
  };

  const todoRender = todoList.map((todo, index) => (
    <TodoItem
      key={index}
      index={index}
      todo={todo}
      onDelete={handleDeleteTodo}
      onEdit={handleEditTodo}
    />
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

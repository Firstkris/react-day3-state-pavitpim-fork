// NodeModules
import React from 'react';
import { nanoid } from 'nanoid';

// Src
import TodoItem from './components/TodoItem';

// todoList = Array<string> => มีข้อมูลให้ใช้แค่  index,string
// todoLists = Array<object_todo> => มีข้อมูลให้ใช้ index, ของใน Object
/* 
TODO_SCHEMAS
todo_object = {
  id:string,
  task:string,
  done:boolean,
  due_date?: string "YYYY-MM-DD"
}
*/
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
  const handleDeleteTodo = (idx) => {
    // update state แบบ callback
    setTodoList((curr) => curr.filter((todo, index) => index !== idx));
  };

  const handleEditTodo = (idx, updateValue) => {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1, updateValue);
    setTodoList(newTodoList);
  };

  const todoRender = todoList.map((todoObj, index) => (
    <TodoItem
      key={todoObj.id}
      index={index}
      todo={todoObj.task}
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

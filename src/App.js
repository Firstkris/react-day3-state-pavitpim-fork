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
  const handleDeleteTodo = (id) => {
    // #1 update State แบบ ยัดค่า (Search and Destroy)
    // const foundIndex = todoList.findIndex((todoObj) => todoObj.id === id);
    // if (foundIndex !== -1) {
    //   const newTodoList = [...todoList];
    //   newTodoList.splice(foundIndex, 1);
    //   setTodoList(newTodoList);
    // }

    // #2 update state แบบยัดค่า (filter)
    const newTodoList = todoList.filter((todoObj) => todoObj.id !== id);
    setTodoList(newTodoList);

    // #3 update state แบบ callback
    // setTodoList((curr) => curr.filter((todoObj) => todoObj.id !== id));
  };

  const handleEditTodo = (idx, updateValue) => {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1, updateValue);
    setTodoList(newTodoList);
  };

  const todoRender = todoList.map((todoObj, index) => (
    <TodoItem
      key={todoObj.id}
      todo={todoObj} // {id:string,task:string,done:boolean}
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

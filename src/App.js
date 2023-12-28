import React from 'react';

// React State ใช้งานนอก FunctionComponent ไม่ได้ ❌

function App() {
  // React State ใช้งานภายใน FunctionComponentn เท่่านั้น ✅
  const [todos, setTodos] = React.useState(['HW', 'Hangout']);
  const [newTodo, setNewTodo] = React.useState('');

  // handle Fn
  // 1.handle การพิมพ์ -> <input/>
  const handleChangeInput = (event) => {
    setNewTodo(event.target.value);
  };

  // 2.handle add (การสร้าง todo ใหม่) -> <button>
  const handleAddNewTodo = (event) => {
    console.log('add todo');
    // สร้าง Todo ใหม่  -> เอาข้อความปัจจุบันไปต่อท้าย Array

    // 1. push => ref เดิม react จะไม่รู้ว่า state เปลี่ยน
    // todos.push('Sleep');

    // 2. clone array เดิมมาก่อน + แก้ไข
    const newTodos = [...todos, newTodo]; // ["HW","Hangout","Sleep"]
    setTodos(newTodos);
    setNewTodo('');
  };

  const todoRender = todos.map((todo, index) => <li key={index}>{todo}</li>);
  console.log('render / rerender');
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

// ทวนเรื่อง Map
// input : ["Hw","Hangout"]
// output : [<li>Hw</li>, <li>Hangout</li>]
// instruction : input -> output : todo -> <li>todo</li>
// map : input.map(instruction) ==> สร้าง output

// Array เป็น Reference

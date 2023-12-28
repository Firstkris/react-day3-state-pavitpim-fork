import React from 'react';

// React State ใช้งานนอก FunctionComponent ไม่ได้ ❌

function App() {
  // React State ใช้งานภายใน FunctionComponentn เท่่านั้น ✅
  const [todoList, setTodoList] = React.useState(['HW', 'Hangout']);
  const [newTodo, setNewTodo] = React.useState('');

  const [isEdit, setIsEdit] = React.useState(false);

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
    console.log('delete todo', idx);
    /*
      1. เอาสมาชิกที่ index นั้นออก
      2. 
        - clone array เก่า
        - ลบสมาชิกที่ index นั้นออกจาก array ใหม่
        - นำ array ใหม่ไป set เป็น stateใหม่
    */

    // update state แบบ ยัดค่า
    // const newTodoList = [...todoList];
    // newTodoList.splice(idx, 1);
    // setTodoList(newTodoList);

    // update state แบบ callback
    setTodoList((curr) => curr.filter((todo, index) => index !== idx));
  };

  // 4. handle Toggle Edit <-> Show
  const handleToggleEdit = () => {
    setIsEdit((p) => !p);
  };

  const todoRender = todoList.map((todo, index) => (
    <li key={index}>
      {isEdit ? <input value={todo} /> : <span>{todo}</span>}
      <button onClick={handleToggleEdit}>{isEdit ? 'save' : 'edit'}</button>
      <button onClick={(e) => handleDeleteTodo(index)}>x</button>
    </li>
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

// ทวนเรื่อง Map
// input : ["Hw","Hangout"]
// output : [<li>Hw</li>, <li>Hangout</li>]
// instruction : input -> output : todo -> <li>todo</li>
// map : input.map(instruction) ==> สร้าง output

// Array เป็น Reference

// #### เพิ่ม Feature
// มี UI แสดงผล/รับ UserInput
// มี handleFunction -> Trigger Update State

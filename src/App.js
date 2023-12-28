import React from 'react';

// React State ใช้งานนอก FunctionComponent ไม่ได้ ❌

function App() {
  // React State ใช้งานภายใน FunctionComponentn เท่่านั้น ✅
  const [todos, setTodos] = React.useState(['HW', 'Hangout', 'HW']);

  const todoRender = todos.map((todo, index) => <li key={index}>{todo}</li>);

  return (
    <div>
      <h1>My Todo</h1>
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

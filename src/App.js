import React from 'react';

// Lab-2
// จงสร้าง Button มีข้อความว่า “Click to hide text”
// เมื่อผู้ใช้ click button ให้ซ่อน Text

/* 
TASK 
1. UI  Button, Text
2. ทำให้ปุ่มคลิก (ผูก event)
3a. ซ่อน TEXT : Condition Render
   {true && <p>text</p>} แสดง text
   {false && <p>text</p>} ซ่อน text
3b. Click แล้วซ่อน (toggle boolean true => false)
    toggle state
*/

// function App() {
//   const [isShow, setIsShow] = React.useState(true);

//   // Event Handler function
//   const handleClick = () => {
//     console.log('click');
//     setIsShow(false);
//   };
//   return (
//     <main className='app'>
//       <button onClick={handleClick}>click to hide text</button>
//       {isShow && <p>text</p>}
//     </main>
//   );
// }

// Lab3
/*
- จงสร้าง Button มีข้อความว่า “Hide”

- เมื่อผู้ใช้ click button 
  -  ให้ซ่อนข้อความเดิม "Hide"
  -  และเปลี่ยนข้อความบน Button เป็น “Show” 
  -  และซ่อน text
  
- เมื่อ click button อีกครั้ง
    - ให้ซ่อนข้อความเดิม "Show"
    -ให้แสดงข้อความและเปลี่ยนข้อความบน Button เป็น Hide
    - แสดง text

TASK
1. UI -> Button, Text
2. ทำให้คลิกได้
3. สลับการแสดงผลในปุ่ม Hide <-> Show
4. สลับการแสดงผล text (ไม่แสดงผล <-> แสดงผล)
5. คลิกแล้วสลับการแสดง
*/
function App() {
  // let isShow = true;
  const [isShow, setIsShow] = React.useState(true);

  // Handler Fn
  const handleClick = () => {
    console.log('click');
    // isShow = false;
    // if (isShow === true) setIsShow(false);
    // else if (isShow === false) setIsShow(true);

    // setIsShow(!isShow);
    setIsShow((cur) => !cur);
  };
  return (
    <main className='app'>
      <button onClick={handleClick}>{isShow ? 'Hide' : 'Show'}</button>
      {isShow ? <p>Text</p> : null}
    </main>
  );
}

export default App;

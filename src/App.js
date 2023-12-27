import React from 'react';

function App() {
  const [isShow,setIsShow] = React.useState(true)

  // 1. สร้าง UI คือปุ่ม ✅
  // 2. คลิกได้ (ผูกฟังก์ชัน) => Web รู้ว่ามีการ click ✅
  //      - สร้างฟังก์ชัน
  //      - เอาฟังก์ชันไปผูกกับ UI ผ่าน attribute Event ต่างๆ
  // 3. คลิกแล้วซ่อนปุ่ม (click แล้วเปลี่ยนเป็น state false)
  //      - condition render ✅
  //      - state (state-1 แสดงปุ่ม , state-2 ลบปุ่ม)
  //           - how to initialize state
  //           - how to update state
  const handleClick = () => {
    console.log('click');
    setIsShow(false)
  };
  return (
    <main className='app'>
     {isShow 
      ? <button onClick={handleClick}>Click to hide me</button>
      : null}
      {/* false => null */}
      {/* true => <button> */}
    </main>
  );
}

export default App;

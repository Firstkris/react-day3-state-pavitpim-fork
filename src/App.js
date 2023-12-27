import Form from './Form';
import React from 'react';
function App() {
  const [submittedTimes, setSubmittedTimes] = React.useState(0);
  // สำหรับ App จะสามารถรู้ข้อมูลต่างๆใน Form ได้ไหม
  // สำหรับ App มองว่า <Form/> เป็น uncontrolled Component
  // return <Form />;

  let disabled = false;

  // props.onSubmit('12345');
  const onSubmit = (a) => {
    console.log('Submit at APP!!!', a);
  };
  // ส่ง add ไป รับ parameter 2 ตัว log ค่าผลลัพธ์

  // สร้างฟังก์ชันสำหรับส่งให้ Children
  const add = (x, y) => {
    console.log(x + y);
  };
  return (
    <>
      <h1>Submit : {submittedTimes} </h1>
      <Form 
				disabled={disabled} 
				onSubmit={onSubmit} 
				onAdd={add} 
				increaseSubmit={setSubmittedTimes}
				/>
    </>
  );
}

// Topic 1
// uncontrolled component : ไม่สามารถ access data ใน component นั้นได้ตลอดเวลา
// controlled component :  สามารถ access data ใน component นั้นได้ตลอดเวลา

// Topic-2 : Communication
// Parent -> Child : ส่ง Props
// Child -> Parent : ทำไงวะ (ส่ง Props เป็น function)
// Child -> Child : ทำไม่ได้ใน React
export default App;

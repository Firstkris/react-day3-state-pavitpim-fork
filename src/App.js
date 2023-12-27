import React from 'react';
// Uncontrolled
// Controlled

function App() {
  // State Controlled
  const [username, setUserName] = React.useState('');
  const [errorUserName, setErrorUserName] = React.useState('');
  const [usernameColor, setUserNameColor] = React.useState('black');

  const [email, setEmail] = React.useState('');
  const [emailColor, setEmailColor] = React.useState('black');
  const [emailError, setEmailError] = React.useState('');
  // Handler Function <form>
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate Form

    // requirement : ไม่ต่ำกว่า 8 ตัวอักษร และ ไม่ซ้ำกับคนอื่น
    if (username.length < 8) {
      // alert('ชื่อผู้ใช้งานต้องมากกว่า 8 ตัวอักษร');
      setErrorUserName('ชื่อผู้ใช้งานต้องมากกว่า 8 ตัวอักษร');
      // errorUserName == 'ชื่อผู้ใช้งานต้องมากกว่า 8 ตัวอักษร'
      setUserNameColor('red');
    } else {
      setUserNameColor('green');
      setErrorUserName('');
      // errorUserName == ""
    }

    // Validate Email
    if (!email.includes('@')) {
      // alert('Invalid Email');
      setEmailColor('red');
      setEmailError('รูปแบบอีเมลล์ไม่ถูกต้อง');
    } else {
      // alert('valid Email');
      setEmailColor('green');
      setEmailError('');
    }

    // ส่งไป BackEnd เพื่อเก็บลง DataBase
  };

  // Handler Function <input>
  const handleUserNameChange = (event) => {
    // console.log('user typing..', event.target.value);
    setUserName(event.target.value);
    setErrorUserName('');
    setUserNameColor('black');
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setEmailColor('black');
    setEmailError('');
  };

  // การ setState ใน FN Component จะทำให้ Infinite Loop
  // ต้อง set ใน Event Handler
  // setUserName((p) => p + '5');
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        {/* UserName */}
        <div className='form-input'>
          <label>username</label>
          {/* Controlled Element */}
          <input
            type='text'
            placeholder='username or account'
            value={username} // value ที่แสดงผลขึ้นกับกับ React state
            onChange={handleUserNameChange}
            style={{
              borderColor: usernameColor,
            }}
          />
          {errorUserName && (
            <p
              style={{
                color: usernameColor,
              }}
            >
              {errorUserName}
            </p>
          )}
        </div>

        <div className='form-input'>
          <label>email</label>
          <input
            value={email}
            onChange={handleEmail}
            style={{
              borderColor: emailColor,
            }}
          />
          {emailError && (
            <p
              style={{
                color: emailColor,
              }}
            >
              {emailError}
            </p>
          )}
        </div>

        <button type='submit'>Register</button>
      </form>
    </>
  );
}
// TASK-1 : Collect Data จาก User
// 1. เพิ่ม UI
// 2. ผูก State เข้ากับ Tag Input : value={state}
// 3. ผูก event เข้ากับ fn ที่อัพเดท State ได้

// TASK-2 : Validate Email
// เช็คว่ามี @ ไหม ทำตอน Submit

// TASK-3 : FeedBack UI
/*
Happy CASE : Validate ผ่าน
- border เป็นสีเขียว
- ไม่แสดงข้อความ : ""

Unhappy CASE : Validate ไม่ผ่าน 
- border เป็นสีแดง
- ข้อความแสดง error : "รูปแบบอีเมลล์ไม่ถูกต้อง"

Default CASE : 
- border เป็นสีดำ -> Change
- ไม่แสดงข้อความ : ""

// ปัญหาแสดงข้อความ
State  "" <-> "รูปแบบ email ไม่ถูกต้อง"
*/
export default App;

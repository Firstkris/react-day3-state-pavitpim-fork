import React from 'react';
// Uncontrolled
// Controlled

// เขียนโค้ดให้ทำงานได้ => เข้าใจ syntax และการทำงานของโค้ด
// เขียนโค้ดให้ดี => วิธีการจัดเก็บข้อมูล (DataStructure == โครงสร้าง)
// State String => Primitive
// State => Collection (Object,Array,Map,Set) => เลือกใช้ Object
/*
1 field = 1 Obj = {
	content : "",
	error: "",
	color: ""
}
*/
const DEFAULT = {
  content: '',
  error: '',
  color: 'black',
};

function App() {
  // State Controlled

  // UserName
  const [username, setUserName] = React.useState(DEFAULT);

  // Email
  const [email, setEmail] = React.useState('');
  const [emailColor, setEmailColor] = React.useState('black');
  const [emailError, setEmailError] = React.useState('');

  // Password State
  const [password, setPassword] = React.useState('');
  const [errorPassword, setErrorPassword] = React.useState('');
  const [passwordColor, setPasswordColor] = React.useState('black');
  // ConfirmPassword State
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = React.useState('');
  const [confirmPasswordColor, setConfirmPasswordColor] = React.useState('black');

  // Validation => Matched
  // Validation => len > 6

  // Handler Function <form>
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate Form

    // requirement : ไม่ต่ำกว่า 8 ตัวอักษร และ ไม่ซ้ำกับคนอื่น
    if (username.content.length < 8) {
      // let newState = Object.assign({}, username, {
      //   error: 'ชื่อผู้ใช้งานต้องมากกว่า 8 ตัวอักษร',
      //   color: 'red',
      // });
      // setUserName(newState);

      setUserName((cur) => ({
        ...cur,
        color: 'red',
        error: 'ชื่อผู้ใช้งานต้องมากกว่า 8 ตัวอักษร',
      }));
    } else {
      // let newState = Object.assign({}, username, {
      //   error: '',
      //   color: 'green',
      // });
      // setUserName(newState);

      setUserName((cur) => ({
        ...cur,
        color: 'green',
        error: '',
      }));
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

    if (password !== confirmPassword) {
      setErrorPassword('รหัสผ่านกับรหัสผ่านยืนยันไม่ตรงกัน');
      setErrorConfirmPassword('รหัสผ่านกับรหัสผ่านยืนยันไม่ตรงกัน');
      setPasswordColor('red');
      setConfirmPasswordColor('red');
    } else {
      setErrorPassword('');
      setErrorConfirmPassword('');
      setPasswordColor('green');
      setConfirmPasswordColor('green');
    }

    if (password.length < 6) {
      setErrorPassword('พาสเวิร์ดสั้นไปไอ้หนู');
      setPasswordColor('red');
    }
    if (confirmPassword.length < 6) {
      setErrorConfirmPassword('พาสเวิร์ดสั้นไปไอ้หนู');
      setConfirmPasswordColor('red');
    }

    // ส่งไป BackEnd เพื่อเก็บลง DataBase
  };

  // Handler Function <input>
  const handleUserNameChange = (event) => {
    setUserName({
      content: event.target.value,
      error: '',
      color: 'black',
    });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setEmailColor('black');
    setEmailError('');
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setErrorPassword('');
    setErrorConfirmPassword('');
    setPasswordColor('black');
    setConfirmPasswordColor('black');
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setErrorPassword('');
    setErrorConfirmPassword('');
    setPasswordColor('black');
    setConfirmPasswordColor('black');
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
            value={username.content} // value ที่แสดงผลขึ้นกับกับ React state
            onChange={handleUserNameChange}
            style={{
              borderColor: username.color,
            }}
          />
          {username.error && (
            <p
              style={{
                color: username.color,
              }}
            >
              {username.error}
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

        <div className='form-input'>
          <label>password</label>
          <input
            type='password'
            value={password}
            onChange={handlePassword}
            style={{
              borderColor: passwordColor,
            }}
          />
          {errorPassword && <p style={{ color: passwordColor }}>{errorPassword}</p>}
        </div>

        <div className='form-input'>
          <label>confirm password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPassword}
            style={{
              borderColor: confirmPasswordColor,
            }}
          />
          {errorConfirmPassword && (
            <p style={{ color: confirmPasswordColor }}>{errorConfirmPassword}</p>
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

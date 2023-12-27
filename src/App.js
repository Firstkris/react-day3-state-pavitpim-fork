import React from 'react';
// Uncontrolled
// Controlled

function App() {
  // State Controlled
  const [username, setUserName] = React.useState('');
  const [errorUserName, setErrorUserName] = React.useState('');
  const [usernameColor, setUserNameColor] = React.useState('black');
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
    // ส่งไป BackEnd เพื่อเก็บลง DataBase
  };

  // Handler Function <input>
  const handleUserNameChange = (event) => {
    // console.log('user typing..', event.target.value);
    setUserName(event.target.value);
    setErrorUserName('');
    setUserNameColor('black');
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

        <button type='submit'>Register</button>
      </form>
    </>
  );
}

export default App;

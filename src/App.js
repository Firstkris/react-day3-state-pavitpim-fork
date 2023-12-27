import React from 'react';
// Uncontrolled
// Controlled

function App() {
  // State Controlled
  const [username, setUserName] = React.useState('');

  // Handler Function <form>
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  // Handler Function <input>
  const handleUserNameChange = (event) => {
    console.log('user typing..', event.target.value);
    setUserName(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        {/* UserName */}
        <div className='form-input'>
          <label>username</label>
          <input
            type='text'
            placeholder='username or account'
            value={username} // value ที่แสดงผลขึ้นกับกับ React state
            onChange={handleUserNameChange}
          />
        </div>

        <button type='submit'>Register</button>
      </form>
    </>
  );
}

export default App;

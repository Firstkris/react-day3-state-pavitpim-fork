import React from 'react';
const DEFAULT = {
  content: '',
  error: '',
  color: 'black',
};

function Form(props) {
  // State Controlled
  console.log(props);

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

    // children Execute Parent's Fn
    // props.onSubmit({
    //   password: password,
    //   confirmPassword: confirmPassword,
    //   email: email,
    // });

    // <App/> Parent : add(5,7)
    // <Form/> Child : props.onAdd(5,7)
    // props.onAdd(5, 7);

		// const [submittedTimes, setSubmittedTimes] = React.useState(0);
		// setSubmittedTimes(c => c+1)
		props.increaseSubmit(c => c+1)
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

        <button type='submit' disabled={props.disabled}>
          Register
        </button>
      </form>
    </>
  );
}

export default Form;

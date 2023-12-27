function App() {
  // Handler Function
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        {/* UserName */}
        <div className='form-input'>
          <label>username</label>
          <input />
        </div>

        <button type='submit'>Register</button>
        {/* <button type='button'>inside</button> */}
      </form>
    </>
  );
}

export default App;

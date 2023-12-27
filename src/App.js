import React from 'react';

function App() {
  const [show, setShow] = React.useState(true);

  // handle FN
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <main className='app'>
      {/* {show ? <h1>Show</h1> : null} */}
      {show && <h1>Show</h1>}
      <button onClick={toggleShow}>click</button>
    </main>
  );
}

export default App;

import React from 'react';

function App() {
  // React State (Special JS-Variable)
  const [count, setCount] = React.useState(0);
  console.log('count', count);

  // Handle FN
  const handleIncrease = (event) => {
    let newCount = count + 1;
    setCount(newCount);
    // ทำการอัพเดท state
    // เมื่อ state เปลี่ยนจะทำให้มีการ rerender
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className='app'>
      <h1>count : {count}</h1>
      <div>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrease}>+</button>
      </div>
    </main>
  );
}

/* 
 (count = 0) : <App/> => 1st => first Render
  <main className='app'>
      <h1>count : 0 </h1>
      <button onClick={handleClick}>add</button>
  </main>


 (count = 1) : <App/> => Trigger Rerender
   <main className='app'>
      <h1>count : 1 </h1>
      <button onClick={handleClick}>add</button>
   </main>
*/

// EX-1
// function App() {
//   // js-variable (cant trigger ให้ react rerender ได้)
//   let count = 0;

//   // handle FN
//   const handleClick = function () {
//     count++;
//     console.log('count', count);
//   };
//   return (
//     <main className='app'>
//       <h1>count : {count}</h1>
//       <button onClick={handleClick}>add</button>
//     </main>
//   );
// }

export default App;

/* 
 (count = 0) : <App/> => 1st => first Render
  <main className='app'>
      <h1>count : 0 </h1>
      <button onClick={handleClick}>add</button>
  </main>


 (count = 1) : <App/> => Not Rerender
   <main className='app'>
      <h1>count : 0 </h1>
      <button onClick={handleClick}>add</button>
   </main>
*/

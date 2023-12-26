import React from 'react';
let a = 0;
function Counter() {
  const [count, setCount] = React.useState(0);
  console.log('A', a);
  a++;

  let c = 0;
  console.log('JS VAR C:', c);
  c++;
  console.log('REACT STATE COUNT:', count);
  // Handle FN
  const handleIncrease = (event) => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>count : {count}</h1>
      <div>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrease}>+</button>
      </div>
    </>
  );
}

export default Counter;

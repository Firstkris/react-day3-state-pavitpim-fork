import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

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

  const increaseByThree = () => {
    // วิธีใช้งาน setState
    // 1. setState(newState) ex. setCount(10),setCount(count+3)
    // 2. setState(fn -> newState)

    // setCount(count + 1); // 0 -> 1
    // setCount(count + 1); // 0 -> 1
    // setCount(count + 1); // 0 -> 1

    setCount((currentState) => currentState + 1); // 0->1
    console.log(count); // 0
    setCount((currentState) => currentState + 1); // 1->2
    setCount((currentState) => currentState + 1); // 2->3
  };

  return (
    <>
      <h1>count : {count}</h1>
      <div>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={increaseByThree}>increase by three</button>
    </>
  );
}

export default Counter;

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
    // console.log('clicked');
    // setCount(count + 3);

    setCount(count + 1); // ช้าก่อนโยม (Async รับรู้คำสั่ง ไม่ทำทันที)
    console.log('1'); // Sync : ทำทันที
    setCount(count + 1); // Async รับรู้คำสั่ง ไม่ทำทันที
    console.log('2'); // Sync : ทำทันที
    setCount(count + 1); // Async รับรู้คำสั่ง ไม่ทำทันที
  };
  // React จะอัพเดท State ให้เมื่อ All Event Handler FN จบการทำงาน
  //  Batching Update State (ทำการอัพเดทเป็นรอบๆ ลดการ Rerender)
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

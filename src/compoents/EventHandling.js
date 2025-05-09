import { useState } from "react";

const EventHandling = () => {
  const [count, setCount] = useState(0);

  function handleClickIncrement() {
    let sum = parseInt(1) + count;
    setCount(sum);
  }

  function handleClickDecrease() {
    let sum = count - parseInt(1);
    setCount(sum);
  }
  function handleClickRest() {
    setCount(0);
  }
  return (
    <div>
      <h1>Event Handling Example</h1>
      <p>Count: {count}</p>

      <button onClick={handleClickIncrement}>Increment</button>

      <button onClick={handleClickDecrease}>Decrease</button>

      <button onClick={handleClickRest}>Rest</button>
    </div>
  );
};

export default EventHandling;

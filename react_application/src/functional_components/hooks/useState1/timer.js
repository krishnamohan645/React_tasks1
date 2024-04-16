import { useState } from "react";

const UseStateTimer = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
        setCount((prevCount)=>prevCount+1)
    },1000)

    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  const resetTime = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCount(0);
  };
  return (
    <div className="timer">
        <h1>Stop Watch</h1> 
        <h3>{count} s</h3>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
};

export default UseStateTimer;

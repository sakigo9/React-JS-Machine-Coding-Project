import React, { useState } from 'react';
import './Timer.css';

type timerType = number | undefined;
const Timer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [intervalInstance, setIntervalInstance] = useState<timerType>();
  const [active, setActive] = useState<boolean>(false);

  // resets the timer
  const resetHandler = () => {
    setTime(0);
    setActive(false);
    clearInterval(intervalInstance);
  };

  // starts the timer from a given time state
  const startHandler = () => {
    setActive(true);
    setIntervalInstance(
      setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1200),
    );
  };

  // stops the timer
  const stopHandler = () => {
    setActive(false);
    clearInterval(intervalInstance);
  };
  return (
    <div className="stopwatch">
      <h1>{time}</h1>
      <div className="button-list">
        <button className="button" onClick={startHandler} disabled={active}>
          Start
        </button>
        <button className="button" onClick={stopHandler}>
          Stop
        </button>
        <button className="button" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Timer;

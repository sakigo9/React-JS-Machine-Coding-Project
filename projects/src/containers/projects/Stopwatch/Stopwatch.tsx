import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(0);
  const intervalIdInstanceRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdInstanceRef.current = setInterval(() => {
        const timeElapsed = Date.now() - startTimeRef.current;
        setTime(timeElapsed);
      }, 10);
    }
    return () => clearInterval(intervalIdInstanceRef.current);
  }, [isRunning]);
  const timerValue = () => {
    const minutes = Math.floor((time / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, '0');
    const milleseconds = Math.floor((time % 1000) % 10)
      .toString()
      .padStart(2, '0');

    return minutes + ':' + seconds + ':' + milleseconds;
  };

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - time;
  };
  const stop = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div className="stopwatch-container">
      <div className="timer">{timerValue()}</div>
      <div className="controls">
        <button className="btn start" onClick={start}>
          Start
        </button>
        <button className="btn stop" onClick={stop}>
          Stop
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;

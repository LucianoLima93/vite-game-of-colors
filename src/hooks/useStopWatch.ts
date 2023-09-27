import { useState, useEffect } from 'react';

const useStopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [isTimer, setIsTimer] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (timerOn) {
      interval = setInterval(() => {
        isTimer ? setTime((prevTime) => prevTime - 1)
          : setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return {
    time: time.toString().padStart(2, '0'),
    timerOn,
    setTimerOn,
    setTime,
    setIsTimer,
  };
}

export default useStopWatch;
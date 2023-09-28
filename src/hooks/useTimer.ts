import { useState, useEffect } from 'react';

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  
  useEffect(() => {
    let interval: any = null;
    if (timerOn && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
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
  };
}

export default useTimer;
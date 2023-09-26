import { useEffect } from "react";
import useStopWatch from "../../hooks/useStopWatch";
import { useAplicationContext } from "../../contexts/Context";

const useScoreBoard = () => {
  const { time, timerOn, setTimerOn, setTime, setIsTimer } = useStopWatch();
  const { inProgress, toggleInProgress, toggleTimerOnQuestion, resetTimeQuestion } = useAplicationContext();
  const { currentScore } = useAplicationContext();

  const toggleTimerOn = () => {
    setTimerOn(!timerOn);
  };

  useEffect(() => {
    if (inProgress) {
      setTimerOn(true);
      setIsTimer(true);
      setTime(30);
    }
  }, [inProgress]);
  useEffect(() => {
    if (time === "00" && inProgress) {
      setTimerOn(false);
      toggleTimerOnQuestion();
      toggleTimerOn();
      resetTimeQuestion();
      setTime(30);
      toggleInProgress();
    }
  }, [time])

  return { time, currentScore, toggleTimerOn };
};
export default useScoreBoard;
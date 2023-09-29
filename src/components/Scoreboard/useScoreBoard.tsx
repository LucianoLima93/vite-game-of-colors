import { useEffect } from "react";
// import useTimer from "../../hooks/useTimer";
import { useAplicationContext, useAplicationContextUpdate } from "../../contexts/Context";

const useScoreBoard = () => {
  const { contextValue, time, currentScore } = useAplicationContext();
  const { inProgress, player } = contextValue;
  const { toggleTimerOn, addTime, addCurrentScore, resetScoreList, addTimeQuestion, setInProgress, setRankingList } = useAplicationContextUpdate();
  const { toggleTimerOnQuestion } = useAplicationContextUpdate();

  const saveGameResult = () => {
    // Reseta timer geral
    setInProgress((prev) => !prev);
    toggleTimerOn();
    toggleTimerOnQuestion();
    addTimeQuestion(0);
    addTime(0);
    // salva o ranking
    setRankingList((prev) => [...prev, {score: currentScore, difficulty: contextValue.difficulty, name: player || 'Anonymous'}]);
  };
  const startNewGame = () => {
    toggleTimerOn();
    toggleTimerOnQuestion();
    addTime(30);
    addCurrentScore(0);
    addTimeQuestion(10);
  };
  const resetGame = () => {
    if (inProgress) {
      addTimeQuestion(0);
      toggleTimerOnQuestion();
      setInProgress(false);
      toggleTimerOn();
      addTime(30);
      addCurrentScore(0);
      resetScoreList();
    }
  };
  // Dar start no game
  useEffect(() => {
    if (inProgress) {
      startNewGame();
    }
  }, [inProgress]);

  // Salvar o score e resetar o game
  useEffect(() => {
    if (time <= "00" && inProgress) {
      saveGameResult();
    }
  }, [time]);

  return { time, currentScore, resetGame };
};
export default useScoreBoard;
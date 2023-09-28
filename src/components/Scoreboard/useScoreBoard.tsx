import { useEffect } from "react";
// import useTimer from "../../hooks/useTimer";
import { useAplicationContext, useAplicationContextUpdate } from "../../contexts/Context";
import usePersistedState from "../../hooks/usePersistedState";

const useScoreBoard = () => {
  const { contextValue, toggleTimerOn, addTime, addCurrentScore, resetScoreList, addTimeQuestion, setInProgress, } = useAplicationContext();
  const { currentScore, inProgress, time } = contextValue;
  const { toggleTimerOnQuestion } = useAplicationContextUpdate();
  const [gameState, setGameState] = usePersistedState('game-state', {highScore: 0});

  const saveGameResult = () => {
    // Reseta timer geral
    setInProgress((prev) => !prev);
    toggleTimerOn();
    toggleTimerOnQuestion();
    addTimeQuestion(0);
    // salva o score
    if (gameState.highScore < currentScore) setGameState({highScore: currentScore});
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
    if (time <= "00") {
      saveGameResult();
    }
  }, [time]);

  return { time, currentScore, gameState, resetGame };
};
export default useScoreBoard;
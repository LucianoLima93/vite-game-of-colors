import { useEffect } from "react";
import useStopWatch from "../../hooks/useStopWatch";
import { useAplicationContext } from "../../contexts/Context";
import usePersistedState from "../../hooks/usePersistedState";

const useScoreBoard = () => {
  const { time, timerOn, setTimerOn, setTime, setIsTimer } = useStopWatch();
  const { inProgress, currentScore, toggleInProgress, toggleTimerOnQuestion, resetTimeQuestion, resetScoreList, resetCurrentScore } = useAplicationContext();
  const [gameState, setGameState] = usePersistedState('game-state', {highScore: 0});

  const saveGameResult = () => {
    // Reseta timer geral
    setTimerOn(!timerOn);
    setTime(30);
    // Reseta timer da questão
    resetTimeQuestion(0);
    toggleTimerOnQuestion();
    // Altera inProgress
    toggleInProgress();
    // salva o score
    if (gameState.highScore < currentScore) setGameState({highScore: currentScore});
  };
  const startNewGame = () => {
    setTimerOn(true);
    setIsTimer(true);
    setTime(30);
  };
  const resetGame = () => {
    if (inProgress) {
      resetTimeQuestion(0);
      toggleTimerOnQuestion();
      toggleInProgress();
      setTimerOn(false);
      setTime(30);
      resetCurrentScore();
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
    if (time === "00" && inProgress) {
      saveGameResult();
    }
  }, [time])

  return { time, currentScore, gameState, setTimerOn, resetGame };
};
export default useScoreBoard;
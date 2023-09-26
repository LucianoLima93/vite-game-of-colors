import { createContext, useContext, useState } from 'react';
import useStopWatch from '../hooks/useStopWatch';

const Context = createContext<ContextProps>({} as ContextProps);

export const ContextProvider:React.FC<ContextProviderProps> = ({ children }) => {
  const [scoreList, setScore] = useState<Array<IScore>>([]);
  const { time: timeQuestion, setTime: setTimeQuestion, setTimerOn: setTimerOnQuestion} = useStopWatch();
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);

  const addScore = (scoreItem: IScore) => {
    setScore([...scoreList, scoreItem]);
  };

  const resetScore = () => {
    setScore([]);
  };

  const addCurrentScore = (score: number) => {
    setCurrentScore(score);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
  };

  const resetTimeQuestion = () => {
    setTimeQuestion(1);
  };

  const toggleTimerOnQuestion = () => {
    setTimerOnQuestion((prev) => !prev);
  };

  const toggleInProgress = () => {
    setInProgress((prev) => !prev);
  };
  const resetAll = () => {
    resetScore();
    resetCurrentScore();
    resetTimeQuestion();
  };
  return (
    <Context.Provider value={{ 
      scoreList,
      timeQuestion,
      inProgress,
      currentScore,
      addScore,
      resetScore,
      toggleTimerOnQuestion,
      resetTimeQuestion,
      toggleInProgress,
      addCurrentScore,
      resetCurrentScore
      }}>
      {children}
    </Context.Provider>
  )
}

export const useAplicationContext = () => {
  const scoreboardContext = useContext(Context);
  if (!scoreboardContext) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return scoreboardContext;
};
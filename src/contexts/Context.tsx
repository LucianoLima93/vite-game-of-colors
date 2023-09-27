import { createContext, useContext, useState } from 'react';
import useStopWatch from '../hooks/useStopWatch';
import usePersistedState from '../hooks/usePersistedState';

const Context = createContext<ContextProps>({} as ContextProps);

export const ContextProvider:React.FC<ContextProviderProps> = ({ children }) => {
  const [scoreList, setScoreList] = usePersistedState<Array<IScore>>('score-list', []);
  const { time: timeQuestion, setTime: setTimeQuestion, setTimerOn: setTimerOnQuestion} = useStopWatch();
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);

  const addScoreList = (scoreItem: IScore) => {
    setScoreList([...scoreList, scoreItem]);
  };

  const resetScoreList = () => {
    setScoreList([]);
  };

  const addCurrentScore = (score: number) => {
    setCurrentScore(score);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
  };

  const resetTimeQuestion = (value:number) => {
    setTimeQuestion(value);
  };

  const toggleTimerOnQuestion = () => {
    setTimerOnQuestion((prev) => !prev);
  };

  const toggleInProgress = () => {
    setInProgress((prev) => !prev);
  };
  return (
    <Context.Provider value={{ 
      scoreList,
      timeQuestion,
      inProgress,
      currentScore,
      addScoreList,
      resetScoreList,
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
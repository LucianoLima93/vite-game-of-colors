import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import useTimer from '../hooks/useTimer';
import usePersistedState from '../hooks/usePersistedState';

const Context = createContext<ContextProps>({} as ContextProps);
const ContextUpdate = createContext<ContextUpdateProps>({} as ContextUpdateProps);

export const ContextProvider:React.FC<ContextProviderProps> = ({ children }) => {
  const [scoreList, setScoreList] = usePersistedState<Array<IScore>>('score-list', []);
  // const [rankingList, setRankingList] = usePersistedState<Array<IScore>>('score-list', []);
  const { time: timeQuestion, setTime: setTimeQuestion, setTimerOn: setTimerOnQuestion, timerOn:timeOnQuestion  } = useTimer();
  const { time, timerOn, setTimerOn, setTime } = useTimer();
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);

  const addScoreList = (scoreItem: IScore) => {
    setScoreList([...scoreList, scoreItem]);
  }

  const resetScoreList = () => {
    setScoreList([]);
  }

  const addCurrentScore = (score: number) => {
    setCurrentScore(score);
  }

  const addTimeQuestion = (time: number) => {
    setTimeQuestion(time);
  }

  const addTime = (time: number) => {
    setTime(time);
  }

  const toggleTimerOnQuestion = () => {
    setTimerOnQuestion((prev) => !prev);
  };
  const toggleTimerOn = () => {
    setTimerOn((prev) => !prev);
  };

  const contextValue = useMemo(() => ({
    scoreList,
    timeQuestion,
    time,
    inProgress,
    currentScore,
    timeOnQuestion,
    timerOn,
  }), [scoreList, timeQuestion, time, inProgress, currentScore, timeOnQuestion]);

  return (
    <Context.Provider value={{
      contextValue,
      addScoreList,
      resetScoreList,
      setInProgress,
      addCurrentScore,
      addTimeQuestion,
      addTime,
      toggleTimerOn,
      }}>
        <ContextUpdate.Provider value={{toggleTimerOnQuestion}}>
          {children}
        </ContextUpdate.Provider>
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
export const useAplicationContextUpdate = () => {
  const scoreboardContext = useContext(ContextUpdate);
  if (!scoreboardContext) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return scoreboardContext;
};
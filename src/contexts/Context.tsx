import { createContext, useContext, useState, useMemo } from 'react';
import useTimer from '../hooks/useTimer';
import usePersistedState from '../hooks/usePersistedState';
import { Difficulty } from '../enums';

export const Context = createContext<ContextProps>({} as ContextProps);
export const ContextUpdate = createContext<ContextUpdateProps>({} as ContextUpdateProps);

export const ContextProvider:React.FC<ContextProviderProps> = ({ children }) => {
  const [_scoreList, setScoreList] = usePersistedState<Array<IScore>>('score-list', []);
  const [_rankingList, setRankingList] = usePersistedState<Array<IRanking>>('ranking-list', []);
  const [difficulty, setDifficulty] = useState<number>(Difficulty.EASY); // ['easy', 'medium', 'hard'
  const { time: timeQuestion, setTime: setTimeQuestion, setTimerOn: setTimerOnQuestion, timerOn:timeOnQuestion  } = useTimer();
  const { time, timerOn, setTimerOn, setTime } = useTimer();
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [player, setPlayer] = useState('');

  const addScoreList = (scoreItem: IScore) => {
    setScoreList([..._scoreList, scoreItem]);
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
  const scoreList = useMemo(() => _scoreList.reverse(), [_scoreList]);
  const rankingList = useMemo(() => _rankingList.sort((a, b) => b.score - a.score), [_rankingList]);
  return (
    <Context.Provider value={{
      inProgress,
      scoreList,
      timeOnQuestion,
      timerOn,
      difficulty,
      rankingList,
      player,
      timeQuestion,
      time,
      currentScore,
      }}>
        <ContextUpdate.Provider value={{
          toggleTimerOnQuestion,
          addScoreList,
          resetScoreList,
          setInProgress,
          addCurrentScore,
          addTimeQuestion,
          addTime,
          toggleTimerOn,
          setDifficulty,
          setRankingList,
          setPlayer,
          }}>
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
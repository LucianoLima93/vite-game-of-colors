type IScore = {
  guessedColor: string | null;
  correctColor: string;
  score: number;
  lightOrDarkCorrect: boolean;
  lightOrDarkGuessed: string | boolean;
}

type IRanking = {
  name: string;
  score: number;
  date: string;
};

type ContextValueType = {
  scoreList: Array<IScore>;
  timeQuestion: string;
  time: string;
  inProgress: boolean;
  currentScore: number;
  timeOnQuestion: boolean;
}

interface ContextProps {
  contextValue: ContextValueType;
  addScoreList: (score:IScore) => void;
  resetScoreList: () => void;
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  addCurrentScore: (score:number) => void;
  addTimeQuestion: (time:number) => void;
  addTime: (time:number) => void;
  toggleTimerOn: () => void;
}

interface ContextUpdateProps {
  toggleTimerOnQuestion: () => void;
}

interface ContextProviderProps {
  children: ReactNode;
};
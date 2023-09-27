type IScore = {
  guessedColor: string | null;
  correctColor: string;
  score: number;
  lightOrDarkCorrect: boolean;
  lightOrDarkGuessed: string | boolean;
}

interface ContextProps {
  scoreList: Array<IScore>;
  timeQuestion: string;
  inProgress: boolean;
  currentScore: number;
  addScoreList: (score:IScore) => void;
  resetScoreList: () => void;
  resetTimeQuestion: (time:number) => void;
  toggleTimerOnQuestion: () => void;
  toggleInProgress: () => void;
  addCurrentScore: (score:number) => void;
  resetCurrentScore: () => void;
}

interface ContextProviderProps {
  children: ReactNode;
};
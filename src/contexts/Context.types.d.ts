type IScore = {
  guessedColor: string;
  correctColor: string;
  score: number;
}

interface ContextProps {
  scoreList: Array<IScore>;
  timeQuestion: string;
  inProgress: boolean;
  currentScore: number;
  addScore: (score:IScore) => void;
  resetScore: () => void;
  resetTimeQuestion: () => void;
  toggleTimerOnQuestion: () => void;
  toggleInProgress: () => void;
  addCurrentScore: (score:number) => void;
  resetCurrentScore: () => void;
}

interface ContextProviderProps {
  children: ReactNode;
};
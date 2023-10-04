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
  difficulty: number;
};

interface ContextProps {
  timerOn: boolean;
  timeOnQuestion: boolean;
  inProgress: boolean;
  difficulty: number;
  rankingList: Array<IRanking>;
  player: string;
  scoreList: Array<IScore>;
  currentScore: number;
  time: string;
  timeQuestion: string;
}

interface ContextUpdateProps {
  toggleTimerOnQuestion: () => void;
  addScoreList: (score:IScore) => void;
  resetScoreList: () => void;
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  addCurrentScore: (score:number) => void;
  addTimeQuestion: (time:number) => void;
  addTime: (time:number) => void;
  toggleTimerOn: () => void;
  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
  setRankingList: React.Dispatch<React.SetStateAction<Array<IRanking>>>;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
}

interface ContextProviderProps {
  children: ReactNode;
}
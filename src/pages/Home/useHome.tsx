import { useAplicationContextUpdate } from '../../contexts/Context';
import { Difficulty } from '../../enums';

const useHome = () => {
  const { setRankingList, resetScoreList, setInProgress, addCurrentScore, setPlayer, setDifficulty } = useAplicationContextUpdate();

  const resetAllData = () => {
    if (confirm("Are you sure you want to delete all data?") == true) {
      setRankingList([]);
      resetScoreList();
      setInProgress(false);
      addCurrentScore(0);
      setPlayer('');
      setDifficulty(Difficulty.EASY);
    }
  };
  return { resetAllData };
};

export default useHome;
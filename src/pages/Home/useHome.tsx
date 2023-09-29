import { useAplicationContextUpdate } from '../../contexts/Context';

const useHome = () => {
  const { setRankingList, resetScoreList, setInProgress } = useAplicationContextUpdate();

  const resetAllData = () => {
    if (confirm("Are you sure you want to delete all data?") == true) {
      setRankingList([]);
      resetScoreList();
      setInProgress(false);
    }
  };
  return { resetAllData };
};

export default useHome;
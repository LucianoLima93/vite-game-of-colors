import { useAplicationContext } from "../../contexts/Context";
import useScoreBoard from "./useScoreBoard";

const ScoreBoard = () => {
  const { time, currentScore, resetGame } = useScoreBoard();
  const { rankingList } = useAplicationContext();
  
  return (
    <section className="flex w-96 rounded-md justify-between items-center mx-auto h-auto mb-4 bg-light text-gray-950 text-sm font-medium uppercase border-2 border-dark">
      <div className="flex flex-col flex-1 justify-center items-center p-2">
        <span className="flex-1">Remaning Time (s)</span>
        <span className="flex-1">{time}</span>
      </div>
      <div className="flex-1 flex justify-center items-center border-x-2 border-dark h-full">
        <button onClick={() => resetGame()} className="w-full h-full">Resetar</button>
      </div>
      <div className="flex flex-col flex-1 py-2 items-center justify-center">
        <div className="flex-1 flex items-center w-full gap-2 border-b-2 border-dark pb-2 pl-4">
          <span className="flex-1">High Score</span>
          <span className="flex-1">{rankingList.length > 0 && rankingList[0].score || 0}</span>
        </div>
        <div className="flex-1 flex items-center w-full gap-2 pt-2 pl-4">
          <span className="flex-1">Score</span>
          <span className="flex-1">{currentScore}</span>
        </div>
      </div>
    </section>
  )
}

export default ScoreBoard;

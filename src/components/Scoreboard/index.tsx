import useScoreBoard from "./useScoreBoard";

const ScoreBoard = () => {
  const { time, currentScore } = useScoreBoard();
  return (
    <section className="flex gap-4 w-96 justify-between items-center mx-auto h-auto mb-4 bg-gray-900 text-gray-50 text-sm uppercase">
      <div className="flex flex-col flex-1 justify-center items-center">
        <span className="flex-1">Remaning Time (s)</span>
        <span className="flex-1">{time}</span>
      </div>
      <div className="bg-primary flex-1">
        <button>Restart</button>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex">
          <span className="flex-1">High Score</span>
          <span className="flex-1">0</span>
        </div>
        <div className="flex">
          <span>Score</span>
          <span>{currentScore}</span>
        </div>
      </div>
    </section>
  )
}

export default ScoreBoard;

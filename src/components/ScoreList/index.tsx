import { useAplicationContext } from '../../contexts/Context';

const ScoreList = () => {
  const { scoreList } = useAplicationContext();

  return (
    <aside className='fixed h-full left-0 top-0 bg-gray-50 overflow-y-auto'>
      {scoreList && scoreList.map((score, index) => {
        const guessedColor = score.guessedColor ? score.guessedColor : '';
        const guessedColorOutOftime = score.guessedColor || 'Out of time';

        return (<div key={index} className='flex gap-2 mb-2 w-full p-4 items-center justify-between odd:bg-accent'>
          <span className={`p-2 rounded-md ${score.lightOrDarkCorrect ? 'text-black' : 'text-white'}`}
            style={{ backgroundColor: score.correctColor }}>{score.correctColor}</span>
          <span className={`p-2 rounded-md ${score.lightOrDarkGuessed ? 'text-black' : 'text-white'}`}
            style={{ backgroundColor: guessedColor }}>
            {guessedColorOutOftime}
          </span>
          <span>{score.score}s</span>
        </div>)
      })}
    </aside>
  )
}

export default ScoreList;
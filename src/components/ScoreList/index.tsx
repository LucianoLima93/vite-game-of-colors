import { memo } from 'react';
import { useAplicationContext } from '../../contexts/Context';
import correctIcon from '../../assets/icons/check-circle.svg';
import wrongIcon from '../../assets/icons/close-circle.svg';

const ScoreList = () => {
  const { contextValue } = useAplicationContext();
  const { scoreList } = contextValue;

  return (
    <aside className='h-full bg-gray-50 overflow-y-auto'>
      <h2 className='text-lg font-semibold p-2'>Current/Last game</h2>
      <div className='flex text-sm border-2 border-accent'>
        <span className='p-2 border-r-2 border-accent'>Correct color</span>
        <span className='p-2 border-r-2 border-accent'>Guessed color</span>
        <span className='p-2'>Score</span>
      </div>
      {scoreList && scoreList.map((score, index) => {
        const guessedColor = score.guessedColor ? score.guessedColor : '';
        const guessedColorOutOftime = score.guessedColor || 'Out of time';

        return (<div key={index} className='flex gap-2 w-full p-4 items-center justify-between odd:bg-accent'>
          <span className={`p-2 rounded-md ${score.lightOrDarkCorrect ? 'text-black' : 'text-white'}`}
            style={{ backgroundColor: score.correctColor }}>{score.correctColor}</span>
          <span className={`p-2 rounded-md ${score.lightOrDarkGuessed ? 'text-black' : 'text-white'}`}
            style={{ backgroundColor: guessedColor }}>
            {guessedColorOutOftime}
          </span>
          <div className='flex gap-1 items-center justify-center'>
            {score.guessedColor === score.correctColor ? (
              <img src={correctIcon} alt="Correct" className='w-4 h-4' />
            ):(
              <img src={wrongIcon} alt="Wrong" className='w-4 h-4' />
            )}
            <span>{score.score}s</span>
          </div>
        </div>)
      })}
    </aside>
  )
};

export default memo(ScoreList);
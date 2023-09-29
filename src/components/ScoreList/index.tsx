import { memo } from 'react';
import { useAplicationContext } from '../../contexts/Context';
import correctIcon from '../../assets/icons/check-circle.svg';
import wrongIcon from '../../assets/icons/close-circle.svg';

const ScoreList = () => {
  const { scoreList } = useAplicationContext();

  return (
    <aside className='md:h-full h-fit mb-8 bg-gray-50 overflow-y-auto order-2 md:order-none md:w-auto w-full md:px-2 px-5'>
      <h2 className='text-lg font-semibold p-2'>Current/Last game</h2>
      <div className='flex justify-between w-full text-sm border-2 border-accent'>
        <span className='p-2 border-r-2 w-4/12 border-accent'>Correct color</span>
        <span className='p-2 border-r-2 w-4/12 border-accent'>Guessed color</span>
        <span className='p-2 w-4/12'>Score</span>
      </div>
      {scoreList && scoreList.map((score, index) => {
        const guessedColor = score.guessedColor ? score.guessedColor : '';
        const guessedColorOutOftime = score.guessedColor || 'Out of time';

        return (<div key={index} className='flex gap-2 w-full p-4 items-center justify-between odd:bg-accent'>
          <span className={`p-2 rounded-md w-4/12 ${score.lightOrDarkCorrect ? 'text-black' : 'text-white'}`}
            style={{ backgroundColor: score.correctColor }}>{score.correctColor}</span>
          <span className={`p-2 rounded-md w-4/12 ${score.lightOrDarkGuessed ? 'text-black' : 'text-white'}`}
            style={{ backgroundColor: guessedColor }}>
            {guessedColorOutOftime}
          </span>
          <div className='flex gap-1 items-center justify-center w-4/12'>
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
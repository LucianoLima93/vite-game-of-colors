
import { lazy, memo } from 'react';

const ScoreList = lazy(() => import('../../components/ScoreList'));
const ScoreBoard = lazy(() => import('../../components/Scoreboard'));
const ColorBoard = lazy(() => import('../../components/ColorBoard'));

const Home = () => {
  return (
    <div className='w-full h-full relative'>
      <ScoreList />
      <div className='h-full flex flex-col justify-center items-center'>
        <>
          <h1 className='text-2xl p-4 font-bold'>Guess the Color</h1>
          <ScoreBoard />
          <ColorBoard />
        </>
      </div>
    </div>
  )
}

export default memo(Home);
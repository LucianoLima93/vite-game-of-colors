
import { lazy, memo } from 'react';
import Ranking from '../../components/Ranking';
import Button from '../../components/shared/Button';
import useHome from './useHome';

const ScoreList = lazy(() => import('../../components/ScoreList'));
const ScoreBoard = lazy(() => import('../../components/Scoreboard'));
const ColorBoard = lazy(() => import('../../components/ColorBoard'));

const Home = () => {
  const { resetAllData } = useHome();
  return (
    <div className='w-full h-full relative flex justify-between flex-wrap'>
      <ScoreList />
      <div className='h-full flex flex-col justify-center items-center'>
        <>
          <h1 className='text-2xl p-4 font-bold'>Guess the Color</h1>
          <ScoreBoard />
          <ColorBoard />
        </>
      </div>
      <Ranking />
      <Button className='bg-transparent absolute bottom-2 right-2' onClick={() => resetAllData()} >Reset all data</Button>
    </div>
  )
}

export default memo(Home);
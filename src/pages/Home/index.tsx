
import { lazy } from 'react';
import Ranking from '../../components/Ranking';
import Button from '../../components/shared/Button';
import useHome from './useHome';

const ScoreList = lazy(() => import('../../components/ScoreList'));
const ScoreBoard = lazy(() => import('../../components/Scoreboard'));
const ColorBoard = lazy(() => import('../../components/ColorBoard'));

const Home = () => {
  const { resetAllData } = useHome();
  return (
    <div className='w-full h-full relative flex md:justify-between flex-wrap justify-center'>
      <ScoreList />
      <div className='md:h-full mb-8 flex flex-col md:justify-center justify-start items-center order-1 md:order-none'>
        <>
          <h1 className='text-2xl p-4 font-bold'>Guess the Color</h1>
          <ScoreBoard />
          <ColorBoard />
        </>
      </div>
      <Ranking />
      <Button className='bg-transparent md:absolute md:bottom-2 md:right-2 order-3 my-8' onClick={() => resetAllData()} >Reset all data</Button>
    </div>
  )
}

export default Home;
import ColorBoard from '../../components/ColorBoard'
import ScoreBoard from '../../components/Scoreboard'
import ScoreList from '../../components/ScoreList'

const Home = () => {
  return (
    <div className='w-full h-full relative'>
      <ScoreList />
      <div className='h-full flex flex-col justify-center items-center'>
        <>
          <h1>Guess the Color</h1>
          <ScoreBoard />
          <ColorBoard />
        </>
      </div>
    </div>
  )
}

export default Home
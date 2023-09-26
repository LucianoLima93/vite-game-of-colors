import './App.css';
import { useAplicationContext } from './contexts/Context';
import ColorBoard from './components/ColorBoard';
import ScoreBoard from './components/Scoreboard';
import useScoreBoard from './components/Scoreboard/useScoreBoard';

function App() {
  const { toggleTimerOn} = useScoreBoard();
  const { toggleTimerOnQuestion, toggleInProgress } = useAplicationContext();

  return (
    <main className='h-screen w-full bg-gray-50 flex flex-col justify-center items-center'>
      <h1>Guess the Color</h1>
      <ScoreBoard />
      <ColorBoard />
      <button onClick={() => {
          toggleTimerOn();
          toggleTimerOnQuestion();
          toggleInProgress();
        }}>Start</button>
    </main>
  )
}

export default App

import './App.css'

function App() {
  const randomColor = useColor();
  return (
    <main>
      <div className='w-80 h-80' style={{backgroundColor: randomColor[0]}}></div>
    </main>
  )
}

export default App

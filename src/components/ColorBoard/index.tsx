import { widthVariants } from "../../constants";
import useColorBoard from "./useColorBoard";

const ColorBoard = () => {
  const { correctColor, randomArrColors, timeQuestion, inProgress, lightOrDarkCorrect, checkCorrectColor, startGame } = useColorBoard();
  return (
    <div className='flex flex-col gap-4 w-96 justify-center items-center mx-auto h-auto'>
      <div className="flex flex-col w-full">
        <div className={`w-full bg-gray-300 h-2 relative`}>
          <div className={`absolute ${widthVariants[timeQuestion]} transition-all bg-primary top-0 h-2`} />
        </div>
        <div className='w-full h-80 relative' style={{ backgroundColor: correctColor }}>
          <span className={`${lightOrDarkCorrect ? 'text-gray-950' : 'text-gray-50'} absolute right-0 p-2 text-lg font-semibold`}>{timeQuestion}s</span>
        </div>
      </div>
      {inProgress && (
        <div className='flex justify-center items-center bg-light text-gray-950 text-lg w-96 rounded-md border-2 border-dark'>
          {randomArrColors.map((color: string) => (
            <div key={color}
              className={`border-x-2 border-dark last:border-none first:border-none w-full cursor-pointer hover:bg-accent text-center py-4 px-2
            last:rounded-br-md last:rounded-tr-md first:rounded-bl-md first:rounded-tl-md`}
              onClick={() => checkCorrectColor(color)}>{color}</div>
          ))}
        </div>
      )}
      {!inProgress && (
        <button
          className="bg-light hover:bg-accent border-2 border-dark text-dark font-bold py-2 px-4 rounded-md w-96 hover:scale-95 transition-all"
          onClick={() => startGame()}>Start</button>
      )}
    </div>
  )
}

export default ColorBoard;
import { widthVariants } from "../../constants";
import useColorBoard from "./useColorBoard";
import Button from "../shared/Button";
import { useAplicationContext, useAplicationContextUpdate } from "../../contexts/Context";
import { Difficulty } from "../../enums";

const ColorBoard = () => {
  const { correctColor, randomArrColors, timeQuestion, inProgress, lightOrDarkCorrect, checkCorrectColor, startGame, changeDifficulty } = useColorBoard();
  const { contextValue } = useAplicationContext();
  const { setPlayer } = useAplicationContextUpdate();

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
        <div className='flex justify-center items-center bg-light text-gray-950 text-lg w-max rounded-md border-2 border-dark'>
          {randomArrColors.map((color: string) => (
            <div key={color}
              className={` border-r-2 border-dark last:border-none w-full cursor-pointer hover:bg-accent text-center py-4 px-2
            last:rounded-br-md last:rounded-tr-md first:rounded-bl-md first:rounded-tl-md`}
              onClick={() => checkCorrectColor(color)}>{color}</div>
          ))}
        </div>
      )}
      {!inProgress && (
        <>
          <div className="flex flex-col w-full gap-2">
            <div>
              <h2 className="text-dark mb-1" >Difficulty: <span className="font-bold"> {Difficulty[contextValue.difficulty]}</span></h2>
              <div className="flex gap-2">
                <Button onClick={() => changeDifficulty(Difficulty.EASY)}>Easy</Button>
                <Button onClick={() => changeDifficulty(Difficulty.MEDIUM)}>Medium</Button>
                <Button onClick={() => changeDifficulty(Difficulty.HARD)}>Hard</Button>
              </div>
            </div>
            <input className="border-2 border-dark rounded-md px-2 w-full placeholder:text-dark placeholder:uppercase" 
              maxLength={20}
              type="text"
              name="name"
              id="name"
              placeholder="Type your player name"
              onChange={(e) => setPlayer(e.target.value)} />
            <Button className="w-full" onClick={() => startGame()}>Start</Button>
          </div>
        </>
      )}
    </div>
  )
}

export default ColorBoard;
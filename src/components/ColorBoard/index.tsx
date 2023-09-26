import { widthVariants } from "../../constants";
import useColorBoard from "./useColorBoard";

const ColorBoard = () => {
  const { correctColor, randomArrColors, timeQuestion, checkCorrectColor } = useColorBoard();
  return (
    <div className='flex flex-col gap-4 w-96 justify-center items-center mx-auto h-auto'>
      <div className="flex flex-col w-full">
        <div className={`w-full bg-gray-300 h-2 relative`}>
          <div className={`absolute ${widthVariants[timeQuestion]} transition-all bg-teal-500 top-0 h-2`} />
        </div>
        <div className='w-full h-80' style={{ backgroundColor: correctColor }}></div>
      </div>
      <div className='flex justify-center items-center bg-gray-900 text-gray-50 text-lg w-96 rounded-md border-2 border-teal-500'>
        {randomArrColors.map((color: string) => (
          <div key={color}
            className={`border-x-2 border-teal-300 last:border-none first:border-none w-full cursor-pointer hover:bg-gray-700 text-center py-4 px-2
          last:rounded-br-md last:rounded-tr-md first:rounded-bl-md first:rounded-tl-md`}
            onClick={() => checkCorrectColor(color)}>{color}</div>
        ))}
      </div>
    </div>
  )
}

export default ColorBoard
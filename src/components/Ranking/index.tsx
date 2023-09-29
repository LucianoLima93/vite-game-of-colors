import { memo } from 'react'
import { useAplicationContext } from "../../contexts/Context"
import { Difficulty } from '../../enums';

const Ranking = () => {
  const { contextValue } = useAplicationContext();
  const { rankingList } = contextValue;
  return (
    <aside className='overflow-y-auto w-96 order-3 md:order-none p-2'>
      <h2 className='text-lg font-semibold p-2'>Ranking Guess the color game</h2>
      <div className='flex justify-between w-full text-sm border-2 border-accent'>
        <span className='p-2 border-r-2 border-accent w-5/12'>Name</span>
        <span className='p-2 border-r-2 border-accent w-2/12'>Score</span>
        <span className='p-2 w-5/12'>Difficulty</span>
      </div>
      {rankingList.map((item, index) => (
        <div key={index} className="flex justify-between items-start w-full bg-secondary text-gray-950 text-base uppercase p-1 mb-2 rounded-md">
          <span className="w-5/12 pl-2">{item.name}</span>
          <span className="w-2/12 pl-2">{item.score}</span>
          <span className="w-5/12 pl-2">{Difficulty[item.difficulty]}</span>
        </div>
      ))}
    </aside>
  )
}

export default memo(Ranking);
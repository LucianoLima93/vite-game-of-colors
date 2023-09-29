import { memo } from 'react'
import { useAplicationContext } from "../../contexts/Context"
import { Difficulty } from '../../enums';

const Ranking = () => {
  const { contextValue } = useAplicationContext();
  const { rankingList } = contextValue;
  return (
    <aside className='overflow-y-auto w-96'>
      <h2 className='text-lg font-semibold p-2'>Ranking Guess the color game</h2>
      {rankingList.map((item, index) => (
        <div key={index} className="flex justify-between items-start w-full bg-secondary text-gray-950 text-base uppercase p-1 mb-2 rounded-md">
          <span className="w-5/12">{item.name}</span>
          <span className="w-2/12">{item.score}</span>
          <span className="w-5/12">{Difficulty[item.difficulty]}</span>
        </div>
      ))}
    </aside>
  )
}

export default memo(Ranking);
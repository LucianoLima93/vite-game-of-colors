import { useState } from 'react';
import { getArrayRandomHexColor, getRandomInt } from '../utils';
import { useAplicationContext } from '../contexts/Context';

const useColor = () => {
  const { contextValue } = useAplicationContext();
  const [randomArrColors, setRandomArrColors] = useState<Array<string>>(getArrayRandomHexColor(contextValue.difficulty));
  const [correctColor, setCorrectColor] = useState<string>(randomArrColors[getRandomInt(contextValue.difficulty)]);

  return {randomArrColors, correctColor, setRandomArrColors, setCorrectColor};
};

export default useColor;
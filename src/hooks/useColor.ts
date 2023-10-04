import { useState } from 'react';
import { getArrayRandomHexColor, getRandomInt } from '../utils';
import { useAplicationContext } from '../contexts/Context';

const useColor = () => {
  const { difficulty } = useAplicationContext();
  const [randomArrColors, setRandomArrColors] = useState<Array<string>>(getArrayRandomHexColor(difficulty));
  const [correctColor, setCorrectColor] = useState<string>(randomArrColors[getRandomInt(difficulty)]);

  return {randomArrColors, correctColor, setRandomArrColors, setCorrectColor};
};

export default useColor;
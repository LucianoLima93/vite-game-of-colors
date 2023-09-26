import { useState } from 'react';
import { getArrayRandomHexColor, getRandomInt } from '../utils';

const useColor = (length:number = 1) => {
  const [randomArrColors, setRandomArrColors] = useState<Array<string>>(getArrayRandomHexColor(length));
  const [correctColor, setCorrectColor] = useState<string>(randomArrColors[getRandomInt(length)]);

  return {randomArrColors, correctColor, setRandomArrColors, setCorrectColor};
};

export default useColor;
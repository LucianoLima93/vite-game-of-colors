import { useEffect } from "react";
import { COLORS_ARRAY_LENGTH, CORRECT_ANSWER, OUT_OF_TIME, WRONG_ANSWER } from "../../constants";
import { useAplicationContext } from "../../contexts/Context";
import { getArrayRandomHexColor, getRandomInt, lightOrDark } from "../../utils";
import useColor from "../../hooks/useColor";

const useColorBoard = () => {
  const { contextValue, addScoreList, addTimeQuestion, resetScoreList, setInProgress, addCurrentScore, addTime } = useAplicationContext();
  const { timeQuestion, currentScore, inProgress, time } = contextValue;
  const { correctColor, randomArrColors, setRandomArrColors, setCorrectColor } = useColor(COLORS_ARRAY_LENGTH);
  const lightOrDarkCorrect:boolean = lightOrDark(correctColor) === 'light';

  const startGame = () => {
    addTimeQuestion(10);
    setInProgress((prev) => !prev);
    resetScoreList();
  };

  const resetColors = () => {
    const newRandomArrColors = getArrayRandomHexColor(COLORS_ARRAY_LENGTH);
    setRandomArrColors(newRandomArrColors);
    setCorrectColor(newRandomArrColors[getRandomInt(COLORS_ARRAY_LENGTH)]);
  };

  const checkCorrectColor = (color: string) => {
    if (color === correctColor && timeQuestion < "10") {
      addCurrentScore(currentScore + CORRECT_ANSWER);
      addTime(parseInt(time, 10) + 2);
    } else {
      addCurrentScore(currentScore - WRONG_ANSWER);
      addTime(parseInt(time, 10) - 2);
    }
    const lightOrDarkGuessed:boolean = lightOrDark(color) === 'light';
    
    addScoreList({
      score: parseInt(timeQuestion),
      correctColor: correctColor,
      guessedColor: color,
      lightOrDarkCorrect,
      lightOrDarkGuessed,
    });
    resetColors();
    addTimeQuestion(10);
  };

  useEffect(() => {
    if (timeQuestion <= "00" && inProgress) {
      addCurrentScore(currentScore - OUT_OF_TIME);
      addScoreList({
        score: parseInt(timeQuestion, 10),
        correctColor: correctColor,
        guessedColor: null,
        lightOrDarkCorrect: lightOrDark(correctColor) === 'light',
        lightOrDarkGuessed: 'text-black',
      });
      resetColors();
      addTimeQuestion(10);
    }
  }, [timeQuestion]);

  return { checkCorrectColor, startGame, timeQuestion, correctColor, randomArrColors, inProgress, lightOrDarkCorrect }
};

export default useColorBoard;
import { useEffect } from "react";
import { COLORS_ARRAY_LENGTH, CORRECT_ANSWER, OUT_OF_TIME, WRONG_ANSWER } from "../../constants";
import { useAplicationContext } from "../../contexts/Context";
import { getArrayRandomHexColor, getRandomInt } from "../../utils";
import useColor from "../../hooks/useColor";

const useColorBoard = () => {
  const { timeQuestion, toggleTimerOnQuestion, resetTimeQuestion, addScore} = useAplicationContext();
  const { correctColor, randomArrColors, setRandomArrColors, setCorrectColor } = useColor(COLORS_ARRAY_LENGTH);
  const { addCurrentScore, currentScore } = useAplicationContext();

  const resetColors = () => {
    const newRandomArrColors = getArrayRandomHexColor(COLORS_ARRAY_LENGTH);
    setRandomArrColors(newRandomArrColors);
    setCorrectColor(newRandomArrColors[getRandomInt(COLORS_ARRAY_LENGTH)]);
    resetTimeQuestion();
    toggleTimerOnQuestion();
  };

  const checkCorrectColor = (color: string) => {
    let score = 0;
    if (timeQuestion > "10") {
      addCurrentScore(currentScore + OUT_OF_TIME);
      score = OUT_OF_TIME;
    }
    if (color === correctColor && timeQuestion < "10") {
      addCurrentScore(currentScore + CORRECT_ANSWER);
      score = CORRECT_ANSWER;
    } else {
      addCurrentScore(currentScore - WRONG_ANSWER);
      score = WRONG_ANSWER;
    }
    addScore({ score, correctColor: correctColor, guessedColor: color });
    const newRandomArrColors = getArrayRandomHexColor(COLORS_ARRAY_LENGTH);
    setRandomArrColors(newRandomArrColors);
    setCorrectColor(newRandomArrColors[getRandomInt(COLORS_ARRAY_LENGTH)]);
    resetTimeQuestion();
  };

  useEffect(() => {
    if (timeQuestion > "10") {
      resetTimeQuestion();
      addCurrentScore(currentScore - OUT_OF_TIME);
      const newRandomArrColors = getArrayRandomHexColor(COLORS_ARRAY_LENGTH);
      setRandomArrColors(newRandomArrColors);
      setCorrectColor(newRandomArrColors[getRandomInt(COLORS_ARRAY_LENGTH)]);
    }
  }, [timeQuestion])
  return { checkCorrectColor, resetColors, timeQuestion, correctColor, randomArrColors }
};

export default useColorBoard;
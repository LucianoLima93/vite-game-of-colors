import { useEffect } from "react";
import { COLORS_ARRAY_LENGTH, CORRECT_ANSWER, OUT_OF_TIME, WRONG_ANSWER } from "../../constants";
import { useAplicationContext } from "../../contexts/Context";
import { getArrayRandomHexColor, getRandomInt, lightOrDark } from "../../utils";
import useColor from "../../hooks/useColor";
import useScoreBoard from "../Scoreboard/useScoreBoard";

const useColorBoard = () => {
  console.log('useColorBoard')
  const { inProgress, currentScore, timeQuestion, resetScoreList, resetTimeQuestion, addScoreList, addCurrentScore, toggleTimerOnQuestion, toggleInProgress } = useAplicationContext();
  const { correctColor, randomArrColors, setRandomArrColors, setCorrectColor } = useColor(COLORS_ARRAY_LENGTH);
  const { setTimerOn } = useScoreBoard();

  const startGame = () => {
    setTimerOn((prev) => !prev);
    toggleTimerOnQuestion();
    toggleInProgress();
    resetScoreList();
  };

  const resetColors = () => {
    const newRandomArrColors = getArrayRandomHexColor(COLORS_ARRAY_LENGTH);
    setRandomArrColors(newRandomArrColors);
    setCorrectColor(newRandomArrColors[getRandomInt(COLORS_ARRAY_LENGTH)]);
    resetTimeQuestion(1);
  };

  const checkCorrectColor = (color: string) => {
    if (color === correctColor && timeQuestion < "10") {
      addCurrentScore(currentScore + CORRECT_ANSWER);
    } else {
      addCurrentScore(currentScore - WRONG_ANSWER);
    }
    const lightOrDarkCorrect:boolean = lightOrDark(correctColor) === 'light';
    const lightOrDarkGuessed:boolean = lightOrDark(color) === 'light';
    
    addScoreList({
      score: parseInt(timeQuestion),
      correctColor: correctColor,
      guessedColor: color,
      lightOrDarkCorrect,
      lightOrDarkGuessed,
    });
    resetColors();
  };

  useEffect(() => {
    if (timeQuestion > "10") {
      addCurrentScore(currentScore - OUT_OF_TIME);
      addScoreList({
        score: parseInt(timeQuestion, 10),
        correctColor: correctColor,
        guessedColor: null,
        lightOrDarkCorrect: lightOrDark(correctColor) === 'light',
        lightOrDarkGuessed: 'text-black',
      });
      resetColors();
    }
  }, [timeQuestion]);

  return { checkCorrectColor, startGame, timeQuestion, correctColor, randomArrColors, inProgress }
};

export default useColorBoard;
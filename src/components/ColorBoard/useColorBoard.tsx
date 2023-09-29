import { useEffect, useState } from "react";
import { CORRECT_ANSWER, OUT_OF_TIME, WRONG_ANSWER } from "../../constants";
import { useAplicationContext, useAplicationContextUpdate } from "../../contexts/Context";
import { getArrayRandomHexColor, getRandomInt, lightOrDark } from "../../utils";
import useColor from "../../hooks/useColor";

const useColorBoard = () => {
  const { contextValue, timeQuestion, currentScore, time} = useAplicationContext();
  const {  inProgress, difficulty } = contextValue;
  const { addScoreList, addTimeQuestion, resetScoreList, setInProgress, addCurrentScore, addTime, setDifficulty } = useAplicationContextUpdate();
  const { correctColor, randomArrColors, setRandomArrColors, setCorrectColor } = useColor();
  const lightOrDarkCorrect:boolean = lightOrDark(correctColor) === 'light';

  const startGame = () => {
    addTimeQuestion(10);
    setInProgress((prev) => !prev);
    resetScoreList();
  };

  const resetColors = (difficultySelected:number = difficulty) => {
    const newRandomArrColors = getArrayRandomHexColor(difficultySelected);
    setRandomArrColors(newRandomArrColors);
    setCorrectColor(newRandomArrColors[getRandomInt(difficultySelected)]);
  };

  const changeDifficulty = (difficultySelected:number) => {
    if (difficultySelected !== difficulty) {
      setDifficulty(difficultySelected);
      resetColors(difficultySelected);
    }
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
      score: 10 - parseInt(timeQuestion),
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

  return { checkCorrectColor, startGame, changeDifficulty, timeQuestion, correctColor, randomArrColors, inProgress, lightOrDarkCorrect }
};

export default useColorBoard;
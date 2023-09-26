const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}
const getRandomHexColor = (): string => {
  const randomColor: number = Math.floor(Math.random() * 16777215);
  const hexColor: string = randomColor.toString(16).padStart(6, '0');
  return `#${hexColor}`;
}
const getArrayRandomHexColor = (length: number): Array<string> => {
  return Array.from({ length }).fill('').map(getRandomHexColor);
};
export { getRandomInt, getArrayRandomHexColor };
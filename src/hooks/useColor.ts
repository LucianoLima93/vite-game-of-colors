const useColor = (length:number = 1) => {
  const getRandomHexColor = (): string => {
    const randomColor: number = Math.floor(Math.random() * 16777215);
    const hexColor: string = randomColor.toString(16).padStart(6, '0');
    return `#${hexColor}`;
  }
  return Array.from([length], getRandomHexColor);
};
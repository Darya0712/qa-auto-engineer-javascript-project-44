import { commonLogic, getRandomInt } from '../index.js';

const calculateEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generationQuestionForInt = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = calculateEven(number);
  return [number, correctAnswer];
};

const runEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  commonLogic(generationQuestionForInt);
};
export default runEvenGame;

import { commonLogic, getRandomInt } from '../index.js';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateQuestionNod = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return [question, correctAnswer];
};

const runNodGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  commonLogic(generateQuestionNod);
};
export default runNodGame;

import { commonLogic, getRandomInt } from '../index.js';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
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

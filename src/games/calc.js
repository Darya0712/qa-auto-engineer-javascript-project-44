import { commonLogic, getRandomInt } from '../index.js';

let correctAnswer;

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculateNumbers = (a, b, operator) => {
  switch (operator) {
    case '+':
      correctAnswer = a + b;
      break;
    case '-':
      correctAnswer = a - b;
      break;
    case '*':
      correctAnswer = a * b;
      break;
    default:
      break;
  }
};

const generateQuestionForCalc = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  calculateNumbers(num1, num2, operator);
  return [question, correctAnswer];
};

const runCalcGame = () => {
  console.log('What is the result of the expression?');
  commonLogic(generateQuestionForCalc);
};
export default runCalcGame;

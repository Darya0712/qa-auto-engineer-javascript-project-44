import { commonLogic, setCondition } from '../index.js';
import { getRandomInt } from './even.js';

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const generateQuestionForCalc = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  return [question, correctAnswer];
};

export const calc = () => {
  setCondition('What is the result of the expression?');
  commonLogic(generateQuestionForCalc);
};

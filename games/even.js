import { commonLogic, setCondition } from '../src/index.js';

// Функция для генерации рандомного целого числа
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для проверки четности числа
const generationQuestionForInt = () => {
  const number = getRandomInt(1, 100);
  const countAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const correctAnswer = countAnswer(number);
  return [number, correctAnswer];
};

export const numberEven = () => {
  setCondition('Answer "yes" if the number is even, otherwise answer "no".');
  commonLogic(generationQuestionForInt);
};

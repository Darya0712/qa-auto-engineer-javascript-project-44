import { commonLogic, setCondition } from '../src/index.js';
import { getRandomInt } from './even.js';

// Функция для прогрессии
const generateProgression = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progression = [start];
  for (let i = 1; i < length; i++) {
    progression.push(progression[i - 1] + step);
  }
  const switchIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[switchIndex];
  progression[switchIndex] = '..';
  const question = progression;
  return [question, correctAnswer];
};

export const progression = () => {
  setCondition('What number is missing in the progression?');
  commonLogic(generateProgression);
};

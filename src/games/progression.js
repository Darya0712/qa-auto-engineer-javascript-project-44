import { commonLogic, getRandomInt } from '../index.js';

let progression;

const calculateProgression = (length, start, step) => {
  progression = [start];
  for (let i = 1; i < length; i++) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const generateProgression = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  calculateProgression(length, start, step);
  const switchIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[switchIndex];
  progression[switchIndex] = '..';
  const question = progression;
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  console.log('What number is missing in the progression?');
  commonLogic(generateProgression);
};

export default runProgressionGame;

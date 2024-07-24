import { commonLogic, getRandomInt } from '../index.js';

const calculatePrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const boolAnswer = (bool) => (bool === true ? 'yes' : 'no');

const generationQuestionForPrime = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = boolAnswer(calculatePrime(question));
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  commonLogic(generationQuestionForPrime);
};

export default runPrimeGame;

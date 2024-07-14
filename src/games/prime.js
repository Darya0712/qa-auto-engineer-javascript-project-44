import { commonLogic, getRandomInt } from '../index.js';

let correctAnswer;

const calculatePrime = (num) => {
  correctAnswer = 'yes';
  if (num <= 1) {
    correctAnswer = 'no';
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        correctAnswer = 'no';
        return [num, correctAnswer];
      }
    }
  }
};

const generationQuestionForPrime = () => {
  const question = getRandomInt(36, 37);

  calculatePrime(question);
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  commonLogic(generationQuestionForPrime);
};

export default runPrimeGame;

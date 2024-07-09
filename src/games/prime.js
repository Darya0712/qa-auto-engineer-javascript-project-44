import { commonLogic, setCondition } from '../index.js';
import { getRandomInt } from './even.js';


const generationQuestionForPrime = () => {
  const question = getRandomInt(1, 100);
  let correctAnswer = 'yes';

  if (question <= 1) {
    correctAnswer = 'no';
  } else {
    for (let i = 2; i < question; i++) {
      if (question % i === 0) {
        correctAnswer = 'no';
        return [question, correctAnswer];
      }
    }
    return [question, correctAnswer];
  }
};

export const prime = () => {
  setCondition('Answer "yes" if given number is prime. Otherwise answer "no".');
  commonLogic(generationQuestionForPrime);
};

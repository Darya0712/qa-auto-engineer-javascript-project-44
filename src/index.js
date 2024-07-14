import readlineSync from 'readline-sync';
import { name } from './cli.js';

let myAnswer;

let userAnswer;

const rounds = 3;

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const commonLogic = (question) => {
  for (let i = 1; i <= rounds; i += 1) {
    const forSaveResult = question();
    const exp = forSaveResult[0];

    console.log(`Question: ${exp}`);

    userAnswer = readlineSync.question('Your answer: ');
    myAnswer = forSaveResult[1];

    if (myAnswer.toString() === userAnswer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

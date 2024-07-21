import readlineSync from 'readline-sync';
import { getName } from './cli.js';

let myAnswer;

let userAnswer;

const rounds = 3;

export const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};
export const commonLogic = (question) => {
  for (let i = 1; i <= rounds; i += 1) {
    const [exp, answer] = question();

    console.log(`Question: ${exp}`);

    userAnswer = readlineSync.question('Your answer: ');
    myAnswer = answer;

    if (myAnswer.toString() === userAnswer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'. \nLet's try again, ${getName()}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName()}!`);
};

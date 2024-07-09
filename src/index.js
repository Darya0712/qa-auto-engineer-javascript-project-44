import readlineSync, { question } from 'readline-sync';
import { name } from './cli.js';

export let condition;

export let operation;

export let myAnswer;

export let userAnswer;

let correctCounter = 0;

export const setCondition = (value) => {
  condition = value;
  console.log(condition);
};

export const commonLogic = (question) => {
  for (let i = 0; i < 3; i += 1) {
    const forSaveResult = question();
    const exp = forSaveResult[0];

    console.log(`Question:${exp}`);

    userAnswer = readlineSync.question('Your answer:');
    myAnswer = forSaveResult[1];

    if (myAnswer.toString() === userAnswer.toLowerCase()) {
      console.log('Correct!');
      correctCounter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'. \nLet's try again,${name}`);
      break;
    }
  }
  if (correctCounter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

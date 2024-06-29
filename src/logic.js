import readlineSync from 'readline-sync';
import { name } from './cli.js';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const numberEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctCounter = 0;

  for (let i = 0; i < 3; i += 1) {
    const random = (getRandomInt(1, 100));

    const answer = (random) => (random % 2 === 0 ? 'yes' : 'no');

    const myAnswer = answer(random);

    const userAnswer = readlineSync.question(`Question: ${random}`);

    if (myAnswer === userAnswer.toLowerCase()) {
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

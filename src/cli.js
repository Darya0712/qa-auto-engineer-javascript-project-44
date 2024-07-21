import readlineSync from 'readline-sync';

let name;

const askName = () => {
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
  name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`); // eslint-disable-line no-console
};

const getName = () => name;

export { askName, getName };

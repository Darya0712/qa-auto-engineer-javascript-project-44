import readlineSync from 'readline-sync';

export let name;

const askName = () => {
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
  name = readlineSync.question('May I have your name?');
  console.log(`Hi ${name}!`); // eslint-disable-line no-console
};

export { askName };

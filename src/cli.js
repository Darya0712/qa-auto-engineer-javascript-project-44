import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hi ${name}!`); // eslint-disable-line no-console
};

export default { askName };

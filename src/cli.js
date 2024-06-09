import readlineSync from 'readline-sync';

const askName = () => {;
    const name = readlineSync.question('May I have your name? ');
    console.log('Hi ' + name + '!');
};

  export {askName};


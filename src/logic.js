import { commonLogic, setCondition} from './index.js';


// Функция для генерации рандомного целого числа
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 
};

// Функция для генерации рандомного оператора 
export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

// Функция для проверки четности числа 
const generationQuestionForInt = () =>{
  let number = getRandomInt(1,100);
  let countAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
  let correctAnswer = countAnswer(number);
  return [number, correctAnswer];
};

// Функция для проверки результата операции 
const generateQuestionForCalc = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandomOperator();
  let question = `${num1} ${operator} ${num2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  return [question, correctAnswer];
}


export const numberEven = () => {
  setCondition('Answer "yes" if the number is even, otherwise answer "no".');
  commonLogic(generationQuestionForInt);
};

export const numberCalc = () => {
  setCondition('What is the result of the expression?');
  commonLogic(generateQuestionForCalc);
};


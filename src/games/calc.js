import getRandomInt from '../utilites';
import flow from '..';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = a * b;
  }

  return result;
};

const createCalcTask = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operator = operators[getRandomInt(0, operators.length)];
  const currentQuestion = `${num1} ${operator} ${num2}`;
  const currentAnswer = calculate(num1, num2, operator);

  return [currentQuestion, currentAnswer];
};

export default () => flow(createCalcTask, descriptionGame);

import { generate } from 'random-words';
import chalk from 'chalk';
export const sum = (a, b) => {
  return a + b;
};

const word = generate();

console.log(
  `Hello!!! 
  The ${chalk.redBright('random word')} of today is: ${chalk.bgRed(word)}. 
  The word length is ${sum(word.length, 0)}.`,
);

const value = 5;

if (value === 10) {
  console.log("Value is 10");
}

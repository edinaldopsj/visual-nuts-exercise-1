import {
  FIRST_NUMBER,
  LAST_NUMBER,
  CUSTOM_MESSAGE_1 ,
  CUSTOM_MESSAGE_3,
  CUSTOM_MESSAGE_2,
} from "./constants";

import { ICustomMessage } from "./types";

export function canDivideByNumber(n: number, divideBy: number): Boolean {
  return n % divideBy === 0;
}

export function getCustomMessage(givenNumber: number): ICustomMessage {
  const isDivisibleBy3 = canDivideByNumber(givenNumber, 3);
  const isDivisibleBy5 = canDivideByNumber(givenNumber, 5);
  const isDivisibleBy15 = isDivisibleBy3 && isDivisibleBy5;

  if (isDivisibleBy15) return CUSTOM_MESSAGE_3;
  if(isDivisibleBy5) return CUSTOM_MESSAGE_2;
  if (isDivisibleBy3) return CUSTOM_MESSAGE_1;

  return givenNumber;
}

export function logNumbers(firstNumber: number, lastNumber: number): string {
  const numberAndMessageArray = [];

  for (
    let currentNumber = firstNumber;
    currentNumber <= lastNumber;
    currentNumber++
  ) {
    const customMessage = getCustomMessage(currentNumber);

    numberAndMessageArray.push(customMessage);
  }

  return numberAndMessageArray.join(', ');
}

const numbers = logNumbers(FIRST_NUMBER, LAST_NUMBER);

console.log(numbers);

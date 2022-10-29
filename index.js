"use strict";
exports.__esModule = true;
exports.logNumbers = exports.getCustomMessage = exports.canDivideByNumber = void 0;
var constants_1 = require("./constants");
function canDivideByNumber(n, divideBy) {
    return n % divideBy === 0;
}
exports.canDivideByNumber = canDivideByNumber;
function getCustomMessage(givenNumber) {
    var isDivisibleBy3 = canDivideByNumber(givenNumber, 3);
    var isDivisibleBy5 = canDivideByNumber(givenNumber, 5);
    var isDivisibleBy15 = isDivisibleBy3 && isDivisibleBy5;
    if (isDivisibleBy15)
        return constants_1.CUSTOM_MESSAGE_3;
    if (isDivisibleBy5)
        return constants_1.CUSTOM_MESSAGE_2;
    if (isDivisibleBy3)
        return constants_1.CUSTOM_MESSAGE_1;
    return givenNumber;
}
exports.getCustomMessage = getCustomMessage;
function logNumbers(firstNumber, lastNumber) {
    var numberAndMessageArray = [];
    for (var currentNumber = firstNumber; currentNumber <= lastNumber; currentNumber++) {
        var customMessage = getCustomMessage(currentNumber);
        numberAndMessageArray.push(customMessage);
    }
    return numberAndMessageArray.join(', ');
}
exports.logNumbers = logNumbers;
var numbers = logNumbers(constants_1.FIRST_NUMBER, constants_1.LAST_NUMBER);
console.log(numbers);

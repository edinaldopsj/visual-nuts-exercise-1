import { CUSTOM_MESSAGE_3, CUSTOM_MESSAGE_2, CUSTOM_MESSAGE_1 } from './constants';
const {
  canDivideByNumber,
  getCustomMessage,
  logNumbers,
} = require("./index.ts");

jest.mock("./index");

const mockCanDivideByNumber = canDivideByNumber as jest.MockedFunction<
  typeof canDivideByNumber
>;
const mockGetCustomMessage = getCustomMessage as jest.MockedFunction<
  typeof getCustomMessage
>;

const mockLogCustomNumbers = logNumbers as jest.MockedFunction<
  typeof logNumbers
>;

describe("Function that returns the number's module", () => {
  it("Should return true if given number is divisible by 3", () => {
    const canDivideBy3 = mockCanDivideByNumber(9, 3);

    expect(canDivideBy3).toBe(true);
  });

  it("Should return false if given number isn't divisible by 3", () => {
    const canDivideBy3 = mockCanDivideByNumber(8, 3);

    expect(canDivideBy3).toBe(false);
  });
});

describe("Messages returned to the user", () => {
  it("Should return the customMessage number 1 when typed a number divisible by 3", () => {
    const getMessage = mockGetCustomMessage(9);

    expect(getMessage).toBe(CUSTOM_MESSAGE_1);
  });

  it("Should return the customMessage number 2 when typed a number divisible by 5", () => {
    const getMessage = mockGetCustomMessage(10);

    expect(getMessage).toBe(CUSTOM_MESSAGE_2);
  });

  it("Should return the customMessage number 3 when typed a number divisible by 3 and 5", () => {
    const getMessage = mockGetCustomMessage(15);

    expect(getMessage).toBe(CUSTOM_MESSAGE_3);
  });

  it("Should return the given Number when not divisble by 3 or 5 or both", () => {
    const getMessage = mockGetCustomMessage(2);

    expect(getMessage).toBe(2);
  });
});

describe('Log specific messages by the total numbers', () => {
  it("Should print the following sequence of  numbers if the starting number is 1 and the last number is 15", () => {
    const loggedNumbers = mockLogCustomNumbers(1, 15);

    expect(loggedNumbers).toBe('1, 2, VISUAL, 4, NUTS, VISUAL, 7, 8, VISUAL, NUTS, 11, VISUAL, 13, 14, VISUAL NUTS');
  })
})

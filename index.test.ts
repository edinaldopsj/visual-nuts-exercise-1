const {
  canDivideByNumber,
  getCustomMessage,
  logNumbers,
} = require("./index.ts");

jest.mock("./index");

describe("Function that returns the number's module", () => {
  it("Should return true if given number is divisible by 3", () => {
    const result = canDivideByNumber(9, 3);

    expect(result).toBe(true);
  });

  it("Should return false if given number isn't divisible by 3", () => {
    const result = canDivideByNumber(8, 3);

    expect(result).toBe(false);
  });
});

describe("Messages returned to the user", () => {
  it("Should return the customMessage number 1 when typed a number divisible by 3", () => {
    const message = getCustomMessage(9);

    expect(message).toBe('VISUAL');
  });

  it("Should return the customMessage number 2 when typed a number divisible by 5", () => {
    const message = getCustomMessage(10);

    expect(message).toBe('NUTS');
  });

  it("Should return the customMessage number 3 when typed a number divisible by 3 and 5", () => {
    const message = getCustomMessage(15);

    expect(message).toBe('VISUAL NUTS');
  });

  it("Should return the given Number when not divisble by 3 or 5 or both", () => {
    const message = getCustomMessage(2);

    expect(message).toBe(2);
  });
});

describe('Log specific messages by the total numbers', () => {
  it("Should print the following sequence of  numbers if the starting number is 1 and the last number is 15", () => {
    const loggedNumbers = logNumbers(1, 15);

    expect(loggedNumbers).toBe('1, 2, VISUAL, 4, NUTS, VISUAL, 7, 8, VISUAL, NUTS, 11, VISUAL, 13, 14, VISUAL NUTS');
  })
})

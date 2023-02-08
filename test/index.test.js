const { calculateBonus } = require('../index.js');

describe('calculateBonus function:', () => {
  test(' should return correct bonus', () => {
    expect(calculateBonus(20, 10)).toBeLessThan(50);
    expect(calculateBonus(30, 30)).toEqual(50);
    expect(calculateBonus(10, 40)).toEqual(50);
  });
  test(' should return Nan if function arguments not defined', () => {
    expect(calculateBonus()).toBeNaN();
  });
});

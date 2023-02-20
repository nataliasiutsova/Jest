// const { calculateBonus } = require('../index.js');

// describe('calculateBonus function:', () => {
//   test(' should return correct bonus', () => {
//     expect(calculateBonus(20, 29)).toBeLessThan(50);
//     expect(calculateBonus(10, 40)).toEqual(50);
//     expect(calculateBonus(20, 31)).toEqual(50);
//   });
//   test(' should return Nan if function arguments not defined', () => {
//     expect(calculateBonus()).toBeNaN();
//   });
// });

const { findBestStudent } = require('../index.js');

const groups = [
  [
    { name: 'Ivan', score: 35, date: '2022-10-11' },
    { name: 'Maria', score: 5, date: '2022-10-10' },
    { name: 'Olga', score: 0, date: '' },
    { name: 'Stepan', score: 35, date: '2022-10-12' },
    { name: 'Oleg', score: 9, date: '2022-10-01' },
    { name: 'Zanna', score: 15, date: '2022-10-11' },
  ],
  [
    { name: 'Margo', score: 0, date: '2022-10-11' },
    { name: 'Natalia', score: 25, date: '2022-10-10' },
    { name: 'Marina', score: 25, date: '2022-10-01' },
    { name: 'Dmitry', score: 25, date: '2022-10-12' },
    { name: 'Denis', score: 0, date: '2022-10-02' },
    { name: 'Vadimyr', score: 1, date: '2022-10-11' },
  ],
  [
    { name: 'Irina', score: 0, date: '2022-10-11' },
    { name: 'Vasily', score: 0, date: '2022-10-10' },
    { name: 'David', score: 0, date: '2022-10-11' },
    { name: 'Kristina', score: 0, date: '2022-10-12' },
    { name: 'Varvara', score: 0, date: '2022-10-01' },
    { name: 'Tanya', score: 0, date: '2022-10-11' },
  ],
  [
    { name: 'Irina', score: 60, date: '2022-10-01' },
    { name: 'Vasily', score: 0, date: '2022-10-10' },
    { name: 'David', score: 0, date: '2022-10-11' },
    { name: 'Kristina', score: 0, date: '2022-10-12' },
    { name: 'Varvara', score: 60, date: '2022-10-01' },
    { name: 'Tanya', score: 0, date: '2022-10-11' },
  ],
];

// describe('findBestStudent function', () => {
//   test('should return the best student of the group', () => {
//     expect(findBestStudent(groups[0])).toEqual(['Ivan', 35]);
//     expect(findBestStudent(groups[1])).toEqual(['Marina', 25]);
//     expect(findBestStudent(groups[2])).toEqual('There is not the best student');
//   });
// });

describe('findBestStudent function should return the best student of the group:', () => {
  test.each`
    group        | result
    ${groups[0]} | ${{ name: 'Ivan', score: 35, date: '2022-10-11' }}
    ${groups[1]} | ${{ name: 'Marina', score: 25, date: '2022-10-01' }}
    ${groups[2]} | ${'There is not the best student'}
    ${groups[3]} | ${({ name: 'Irina', score: 60, date: '2022-10-01' }, { name: 'Varvara', score: 60, date: '2022-10-01' })}
  `('The best student: %result', ({ group, result }) => {
    expect(findBestStudent(group)).toEqual(result);
  });
});

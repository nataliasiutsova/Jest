// const calculateBonus = (a, b) => {
//   let bonus;
//   const sum = a + b;
//   sum > 50 ? (bonus = 50) : (bonus = sum);
//   return bonus;
// };

// module.exports = { calculateBonus };

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
];

function findBestStudent(group) {
  group.sort(function compare(a, b) {
    if (a.score === b.score) {
      const firstDate = new Date(a.date).getTime();
      const secondDate = new Date(b.date).getTime();

      return firstDate - secondDate;
    } else {
      return b.score - a.score;
    }
  });

  if (group[0].score === 0) {
    return 'There is not the best student';
  } else {
    let bestStudent = [];
    bestStudent.push(group[0].name);
    bestStudent.push(group[0].score);
    return bestStudent;
  }
}

module.exports = { findBestStudent };

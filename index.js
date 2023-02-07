const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;
  // скрипт останавливает работу.В функцию calculateBonus переданы аргументы a=20,b=10.
  // Переменной sum присвоено значение 30.
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  // скрипт останавливает работу.Переменной bonus,исходя из условия, присвоено значение 30.
  return bonus;
};
calculateBonus(20, 10);

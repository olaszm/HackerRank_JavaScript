function dayOfProgrammer(year) {
  let isLeap;

  if (year <= 1917) {
    isLeap = year % 4 == 0;
  } else {
    isLeap = new Date(year, 2, 0).getDate() == 29;
  }

  let dayOfProgrammer = 256;
  let firstEigthMonts = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31];
  let sumOfDays = firstEigthMonts.reduce((acc, cur) => (acc += cur));
  if (year == 1918) {
    sumOfDays -= 13;
  }
  let dist = dayOfProgrammer - sumOfDays;
  let date = new Date(year, 9, dist);
  console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`);
}

dayOfProgrammer(1918);

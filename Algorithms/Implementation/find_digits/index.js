function findDigits(n) {
  let arrOfDigits = new String(n).split("");
  let counter = 0;
  for (let digit of arrOfDigits) {
    if (n % digit == 0) counter++;
  }

  return counter;
}

findDigits(1012);
findDigits(12);

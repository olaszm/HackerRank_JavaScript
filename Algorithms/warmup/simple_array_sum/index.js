function simpleArraySum(ar) {
  return ar.reduce((acc, curr) => (acc += curr));
}

simpleArraySum(1, 2, 3, 4, 10, 11); // 31

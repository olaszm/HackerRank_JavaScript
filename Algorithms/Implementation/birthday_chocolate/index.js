function birthday(s, d, m) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;

    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }
    if (sum == d) {
      counter++;
    }
  }
  return counter;
}

let result = birthday([1, 2, 1, 3, 2], 3, 2);

console.log(result);

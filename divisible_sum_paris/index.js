function divisibleSumPairs(n, k, ar) {
  let res = [];
  for (let index = 0; index < n; index++) {
    for (let y = index + 1; y < n; y++) {
      if ((ar[index] + ar[y]) % k == 0) {
        res.push(ar[index], ar[y]);
      }
    }
  }
  console.log(res.length / 2);
  return res.length / 2;
}

divisibleSumPairs(6, 4, [1, 3, 2, 6, 1, 2]);
divisibleSumPairs(5, 2, [5, 9, 10, 7, 4]);

function divisibleSumPairs(n, k, ar) {
  let res = [];
  for (let index = 0; index < n; index++) {
    for (let y = index + 1; y < n; y++) {
      if ((ar[index] + ar[y]) % k == 0) {
        res.push(ar[index], ar[y]);
      }
    }
  }
  return res.length / 2;
}

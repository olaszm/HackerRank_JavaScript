function getMoneySpent(keyboards, drives, b) {
  let best = -1;
  for (let i = 0; i <= keyboards.length; i++) {
    for (let y = 0; y <= drives.length; y++) {
      if (keyboards[i] + drives[y] <= b && keyboards[i] + drives[y] > best) {
        best = keyboards[i] + drives[y];
      }
    }
  }
  return best;
}

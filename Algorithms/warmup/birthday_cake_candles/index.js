function birthdayCakeCandles(ar) {
  let max = Math.max(...ar);
  return ar.filter((num) => num == max).length;
}

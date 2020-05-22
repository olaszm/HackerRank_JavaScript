function hurdleRace(k, height) {
  let max = Math.max(...height);
  return max <= k ? 0 : max - k;
}

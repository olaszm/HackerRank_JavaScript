function viralAdvertising(n) {
  let start = 5;
  let liked = 2;
  let cumulative = 2;

  for (let i = 1; i < n; i++) {
    console.log({ day: i + 1, start, liked, cumulative });
    start = liked * 3;
    liked = Math.floor(start / 2);
    cumulative += liked;
  }

  return cumulative;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let validApples = apples.filter((apple) => apple + a >= s && apple + a <= t)
    .length;
  let validOranges = oranges.filter(
    (orange) => orange + b >= s && orange + b <= t
  ).length;
  console.log({ validApples, validOranges });
  console.log(validApples);
  console.log(validOranges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

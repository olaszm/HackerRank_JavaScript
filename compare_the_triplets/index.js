function compareTriplets(a, b) {
  let aCounter = 0;
  let bCounter = 0;

  let arr = a.map((item, index) => {
    if (item > b[index]) {
      aCounter++;
    } else if (item < b[index]) {
      bCounter++;
    } else {
      return;
    }
  });

  return [aCounter, bCounter];
}

compareTriplets([5, 6, 7], [3, 6, 10]);

function breakingRecords(scores) {
  let highest = scores[0];
  let highestCounter = 0;
  let smallest = scores[0];
  let smallestCounter = 0;

  let res = scores.map((score) => {
    if (score > highest) {
      highest = score;
      highestCounter++;
    } else if (score < smallest) {
      smallest = score;
      smallestCounter++;
    } else {
      return;
    }
  });

  console.log(`${highestCounter} ${smallestCounter}`);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);

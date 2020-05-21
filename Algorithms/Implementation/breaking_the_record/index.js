// Complete the breakingRecords function below.
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

  return [highestCounter, smallestCounter];
}

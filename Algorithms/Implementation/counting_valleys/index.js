function countingValleys(n, s) {
  let seaLvl = 0,
    counter = 0;

  for (let i of s) {
    i == "U" ? seaLvl++ : seaLvl--;

    seaLvl == 0 && i == "U" ? counter++ : null;
  }

  return counter;
}

// TestCases
// countingValleys(8, "UDDDUDUU");
// countingValleys(12, "DDUUDDUDUUUD");
// countingValleys(10, "UDUUUDUDDD");

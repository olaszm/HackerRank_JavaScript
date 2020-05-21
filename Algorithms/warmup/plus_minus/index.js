function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg++;
    } else if (arr[i] > 0) {
      pos++;
    } else {
      zeros++;
    }
  }

  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}

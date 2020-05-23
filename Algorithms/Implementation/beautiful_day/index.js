function beautifulDays(i, j, k) {
  let arr = [];
  for (let y = i; y <= j; y++) {
    let reversed = parseInt(y.toString().split("").reverse().join(""));
    if (Number.isInteger((y - reversed) / k)) {
      arr.push(y);
    }
  }
  console.log(arr.length);
}

beautifulDays(20, 23, 6);
beautifulDays(13, 45, 3);

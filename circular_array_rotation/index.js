function circularArrayRotation(a, k, queries) {
  let res = a.map((item, index) => {
    item = item[index - 1];
  });
  console.log(res);
}

circularArrayRotation([1, 2, 3], 2, [0, 1, 2]);

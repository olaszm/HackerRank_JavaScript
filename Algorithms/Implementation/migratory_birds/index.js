function migratoryBirds(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let seen = [];
  for (let i = 0; i < sorted.length; i++) {
    let exist = seen.find((x) => x.type == sorted[i]);
    if (exist) {
      exist.count++;
    } else {
      seen.push({ type: sorted[i], count: 1 });
    }
  }
  let res = seen.reduce((acc, curr) => {
    if (acc.count < curr.count) {
      acc = curr;
    }
    return acc;
  });
  return res.type;
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);

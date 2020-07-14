function serviceLane(width, cases) {
  return cases.map((c) => {
    let subArr = [];
    for (let i = c[0]; i <= c[1]; i++) {
      subArr.push(width[i]);
    }
    return Math.min(...subArr);
  });
}

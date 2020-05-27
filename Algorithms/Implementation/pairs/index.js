function pairs(k, arr) {
  const s = new Set(arr);
  return arr.reduce((ac, v) => (s.has(v - k) ? ac + 1 : ac), 0);
}

pairs(2, [1, 5, 3, 4, 2]);

function sockMerchant(n, ar) {
  let seen = [];
  let counter = 0;
  for (let i = 0; i <= ar.length; i++) {
    if (!seen.includes(ar[i])) {
      seen.push(ar[i]);
    } else {
      let index = seen.findIndex((n) => n == ar[i]);
      seen.splice(index, 1);
      counter++;
    }
  }
  return counter;
}

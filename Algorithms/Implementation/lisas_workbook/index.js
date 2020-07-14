function workbook(n, k, arr) {
  let counter = 0;
  let currentPage = 1;

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (j == currentPage) {
        counter++;
      }

      if (j === arr[i] || j % k === 0) {
        currentPage++;
      }
    }
  }

  return counter;
}

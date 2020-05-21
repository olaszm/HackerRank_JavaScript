function migratoryBirds(arr) {
  let mostfrequent = 0;
  let counter = 0;
  let item = "";
  for (let i = 0; i < arr.length; i++) {
    for (let y = i; y < arr.length; y++) {
      if (arr[i] === arr[y]) {
        counter++;
      }
      if (counter > mostfrequent) {
        mostfrequent = counter;
        item = arr[i];
      }
    }
    counter = 0;
  }

  console.log(item);
  return item;
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
migratoryBirds([1, 4, 4, 4, 5, 3]);

// O(n) solution need some improvement

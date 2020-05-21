function miniMaxSum(arr) {
  let minSum = arr.reduce((acc, curr) => acc + curr);
  let maxSum = arr.reduce((acc, curr) => acc + curr);
  let smallest = Math.min(...arr);
  let largest = Math.max(...arr);

  console.log(`${minSum - largest} ${maxSum - smallest}`);
}

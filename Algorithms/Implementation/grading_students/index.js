function gradingStudents(grades) {
  // Write your code here
  let arr = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if (grades[i] % 5 == 3) {
        arr.push(grades[i] + 2);
      } else if (grades[i] % 5 == 4) {
        arr.push(grades[i] + 1);
      } else {
        arr.push(grades[i]);
      }
    } else {
      arr.push(grades[i]);
    }
  }

  return arr;
}

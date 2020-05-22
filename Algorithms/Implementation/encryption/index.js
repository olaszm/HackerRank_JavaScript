function encryption(s) {
  let strLength = s.length;
  let row = Math.floor(Math.sqrt(strLength));
  let column = Math.ceil(Math.sqrt(strLength));

  if (row + column <= strLength) {
    row = column;
  }

  let columns = new Array(column);

  for (let i = 0; i < row; i++) {
    columns[i] = [];
  }

  let counter = 0;
  for (let i = 0; i < row; i++) {
    for (let y = 0; y < column; y++) {
      columns[i][y] = s[counter++];
    }
  }

  let finish = [];
  for (let i = 0; i < columns.length; i++) {
    let str = "";
    for (let y = 0; y < row; y++) {
      if (columns[y][i] != undefined) {
        str += columns[y][i];
      }
    }
    finish.push(str);
  }

  console.log(finish.join(" "));
}

// encryption("haveaniceday");
encryption("chillout");

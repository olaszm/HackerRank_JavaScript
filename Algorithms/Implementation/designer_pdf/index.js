function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let indexes = [];
  for (let i = 0; i < word.length; i++) {
    for (let y = 0; y < alphabet.length; y++) {
      if (word[i] == alphabet[y]) {
        indexes.push(h[alphabet.indexOf(alphabet[y])]);
      }
    }
  }
  let highest = Math.max(...indexes);
  return highest * word.length;
}

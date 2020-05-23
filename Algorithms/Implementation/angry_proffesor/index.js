function angryProfessor(k, a) {
  let onTime = a.filter((s) => s <= 0).length;
  return onTime >= k ? console.log("NO") : console.log("YES");
}

angryProfessor(3, [-1, -3, 4, 2]);

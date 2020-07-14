function jumpingOnClouds(c, k) {
  let energy = 100,
    i = 0;
  do {
    energy -= c[i] == 1 ? 3 : 1;
    i = (i + k) % c.length;
  } while (i != 0);

  return energy;
}

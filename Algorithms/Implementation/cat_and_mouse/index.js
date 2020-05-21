function catAndMouse(x, y, z) {
  const aDist = Math.abs(z - x);
  const bDist = Math.abs(z - y);
  if (aDist < bDist) {
    return "Cat A";
  } else if (bDist < aDist) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

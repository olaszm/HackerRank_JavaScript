function catAndMouse(x, y, z) {
  const aDist = Math.abs(z - x);
  const bDist = Math.abs(z - y);
  if (aDist < bDist) {
    console.log("Cat A");
  } else if (bDist < aDist) {
    console.log("Cat B");
  } else {
    console.log("Mouse C");
  }
}

// Test Cases
catAndMouse(1, 2, 3); // Should print Cat B
catAndMouse(1, 3, 2); // Should prin Mouse C

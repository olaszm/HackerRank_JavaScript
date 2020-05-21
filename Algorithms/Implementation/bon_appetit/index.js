function bonAppetit(bill, k, b) {
  let total = bill.reduce((acc, curr) => (acc += curr), 0);
  let bActual = (total - bill[k]) / 2;
  if (b - bActual == 0) {
    console.log(`Bon Appetit`);
  } else {
    console.log(b - bActual);
  }
}

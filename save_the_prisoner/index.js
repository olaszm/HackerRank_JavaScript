function saveThePrisoner(n, m, s) {
  return (m - 1 + s) % n || n;
}

saveThePrisoner(5, 2, 1);
saveThePrisoner(5, 2, 2);
saveThePrisoner(7, 19, 2);
saveThePrisoner(3, 7, 3);

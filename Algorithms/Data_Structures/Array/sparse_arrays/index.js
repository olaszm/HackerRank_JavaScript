function matchingStrings(strings, queries) {
  return queries.map((el) => strings.filter((item) => item === el).length);
}

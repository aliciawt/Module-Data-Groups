function createLookup(pairs) {
  const lookup = {};
  for (const element of pairs) {
    lookup[element[0]] = element[1];
  }
  return lookup;
}

module.exports = createLookup;

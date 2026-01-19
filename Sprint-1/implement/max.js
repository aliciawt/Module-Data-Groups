function findMax(elements) {
  if (elements.length === 0) {return -Infinity};
  const numbersOnly = elements.filter(val => typeof val === 'number');
  const sortedNumbers = [...numbersOnly].sort((a, b) => a - b);
  if (numbersOnly.length === 0) return null;
  return sortedNumbers[sortedNumbers.length - 1];
}

module.exports = findMax;

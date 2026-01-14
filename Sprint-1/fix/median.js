// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // returns null if input is not an array
  if (!Array.isArray(list)) return null;

  // only taking numeric elements in the array without modifying original array
  const numbersOnly = list.filter(val => typeof val === 'number');
  
  // returns null if there are no numbers
  if (numbersOnly.length === 0) return null;

  // sorts unsorted array without modifying original array
  const sorted = [...numbersOnly].sort((a, b) => a - b);

  // returns the median
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return ((sorted[middleIndex] + sorted[(middleIndex - 1)]) / 2);
  };
  const median = sorted[middleIndex];
  return median;
}

module.exports = calculateMedian;

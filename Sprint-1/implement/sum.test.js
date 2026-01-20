/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

[
    // Given an empty array
    // When passed to the sum function
    // Then it should return 0
    {input: [], expected: 0},
    // Given an array with just one number
    // When passed to the sum function
    // Then it should return that number
    {input: [0], expected: 0},
    {input: [5], expected: 5},
    {input: [-5], expected: -5},
    // Given an array containing negative numbers
    // When passed to the sum function
    // Then it should still return the correct total sum
    {input: [10, -25, 17], expected: 22},
    {input: [34, -27, -24], expected: },
    {input: [-77, -5, -23], expected: -105},
    // Given an array with decimal/float numbers
    // When passed to the sum function
    // Then it should return the correct total sum
    {input: [2.3, 6.7, 5.5, 1.7], expected: 16.2},
    {input: [-2.3, -6.7, -5.5, -1.7], expected: -16.2},
    {input: [-2.3, 6.7, 5.5, -1.7], expected: 8.2},
    {input: [2.3, -6.7, -5.5, 1.7], expected: -8.2},
    // Given an array containing non-number values
    // When passed to the sum function
    // Then it should ignore the non-numerical values and return the sum of the numerical elements
    {input: [17, -9, 'December', '7', 9], expected: 17},
    // Given an array with only non-number values
    // When passed to the sum function
    // Then it should return the least surprising value given how it behaves for all other inputs
    {input: ['September', 'Christmas', '13', '12'], expected: null},
].forEach(testCase => {
    test (`given an array of ${testCase.input}, should sum all of the numerical values and return ${testCase.expected}`, () => {
        expect(sum(testCase.input)).toEqual(testCase.expected);
    });
});






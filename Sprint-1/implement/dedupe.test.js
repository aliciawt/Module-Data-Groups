const deduplicate = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", () => {
    const array = [];
    deduplicate(array);
    expect(array).toEqual([]);
});

// Given an array with no duplicates
// When passed to th<ze dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns a copy of the original array", () => {
    const array = [1, 2, 3];
    const result = deduplicate(array);
    expect(array).toEqual([1, 2, 3]);
    expect(result).not.toBe(array);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element


// Test case for all scenarios
[
    {input: [], expected: []},
    {input: [1], expected: [1]},
    {input: [1, 2, 3], expected: [1, 2, 3]},
    {input: ["a"], expected: ["a"]},
    {input: ["a", "b", "c"], expected: ["a", "b", "c"]},
    {input: [1, 2, 1], expected: [1, 2]},
    {input: ["a", "b", "a"], expected: ["a", "b"]},
    {input: [1, "b"], expected: [1, "b"]},
    {input: [1, "b", 1, "b"], expected: [1, "b"]},
    {input: [1, "b", 1, 1, "b", "c", "c", "b"], expected: [1, "b", "c"]},
].forEach(testCase => {
    test(`given an array ${testCase.input} should deduplicate and return ${testCase.expected}`, () => {
        expect(deduplicate(testCase.input)).toEqual(testCase.expected);
    });
    test(`given an array ${testCase.input} should return a copy of ${testCase.input}`, () => {
        expect(deduplicate(testCase.input)).not.toBe(testCase.input);
    });
});
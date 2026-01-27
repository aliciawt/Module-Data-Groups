const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
[
    {input: ["hihi"], expected: {"hihi": 1}},
    {input: [67], expected: {"67": 1}},
    {input: ["ooh", "ooh", "ah", "ah", "eek"], expected: {"ooh": 2, "ah": 2, "eek": 1}},
    {input: [1, 2, 3, 2, 3], expected: {"1": 1, "2": 2, "3": 3}},    
].forEach(testCase => {
    test(`given an input array of ${JSON.stringify(testCase.input)}, 
    should tally each item in the array and return ${JSON.stringify(testCase.expected)}`, () => {
        expect(tally(testCase.input)).toEqual(testCase.expected);
    })
})

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
[
    {input: "hello there!"},
    {input: ""},
    {input: 12345},
    {input: null},
    {input: undefined},
    {input: Infinity},
    {input: NaN},
    {input: {}},
].forEach(testCase => {
    test(`tally throws an error for input: ${JSON.stringify(testCase.input)}`, () => {
        expect(() => tally(testCase.input)).toThrow("Invalid input");
    });
});
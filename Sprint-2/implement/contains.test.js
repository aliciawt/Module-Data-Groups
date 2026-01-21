const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

[
    // Given a contains function
    // When passed an object and a property name
    // Then it should return true if the object contains the property, false otherwise
    {input: [{a: 1}, 'a'], expected: true},
    {input: [{a: 1}, 'b'], expected: false},
    // Given an empty object
    // When passed to contains
    // Then it should return false
    {input: [{}, 'a'], expected: false},
    // Given an object with properties
    // When passed to contains with an existing property name
    // Then it should return true
    {input: [{a: 1, b: 2, c: 3}, 'a'], expected: true},
    // Given an object with properties
    // When passed to contains with a non-existent property name
    // Then it should return false
    {input: [{a: 1, b: 2, c: 3}, 'd'], expected: false},
    // Given invalid parameters like an array
    // When passed to contains
    // Then it should return false or throw an error
    {input: [["a", "b", "c"], 'c'], expected: false},
    {input: [null, 'c'], expected: false},
    {input: [undefined, 'c'], expected: false},
    {input: [42, 'c'], expected: false},
    {input: ["hello world", 'd'], expected: false},
    {input: [true, 'c'], expected: false},
].forEach(testCase => {
    test (`given an input of object and target ${testCase.input} should check if the object property contains the target and return ${testCase.expected}`, () => {
        expect(contains(testCase.input[0], testCase.input[1])).toEqual(testCase.expected);
    });
});





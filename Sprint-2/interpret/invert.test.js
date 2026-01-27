const invert = require("./invert.js");

[
    {input: {}, expected: {}},
    {input: {1: "a"}, expected: {a: 1}},
    {input: {"a": 1}, expected: {1: "a"}},
    {input: {"a": 1, "b": 2, "c": 3}, expected: {1: "a", 2: "b", 3: "c"}},
].forEach(testCase => {
    test(`given an input of ${JSON.stringify(testCase.input)}, 
    function should invert the object pairs and return 
    ${JSON.stringify(testCase.expected)}`, () => {
        expect(invert(testCase.input)).toEqual(testCase.expected);
    })
})
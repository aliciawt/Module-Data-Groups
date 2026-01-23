// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing multiple =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test("parses querystring values without =", () => {
  expect(parseQueryString("hello&hai")).toEqual({
    "hello": "", "hai": ""
  });
})

test("parses querystring values with no value", () => {
  expect(parseQueryString("")).toEqual({});
})

test("parses querystring values with trailing & and multiple &", () => {
  expect(parseQueryString("&hello=hola&&&hai=holi&")).toEqual({
    "hello":"hola", "hai":"holi"
  })
})

test("parses querystring values with same keys", () => {
  expect(parseQueryString("name=Alicia&name=Valerie&name=Deedee")).toEqual({
    "name": ["Alicia", "Valerie", "Deedee"]
  })
})
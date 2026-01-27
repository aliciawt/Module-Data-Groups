// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

//function invert(obj) {
//  const invertedObj = {};

//  for (const [key, value] of Object.entries(obj)) {
//    invertedObj.key = value;
//  }

//  return invertedObj;
//}

// a) What is the current return value when invert is called with { a : 1 }
// Currently it returns {key: 1}
// This is because the key name is hardcoded (the string 'key')
// And by using . instead of [] (computed property), the key name simply becomes 'key'
// We should use [] to set a name (usually from computed variable) to the key

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Currently it returns {key: 2} because both values are stored under the key 'key'
// An object cannot have 2 keys with the same name, so the prior value gets overwritten.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Target return value is {1: "a", 2: "b"}

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries return the pairs of keys and values in an object into separate arrays
// The arrays returned would be: [key, value]
// It is needed in this program because this program wants to invert each pair
// Meaning, it needs to loop through each pair

// e) Explain why the current return value is different from the target output
// The current return value is different from the target output for 2 reasons:
// 1.) As mentioned above, the name for key is hardcoded due to the use of . instead of []
// This means, all values will be stored under the key 'key'
// And since there will only be one 'key' always, the values prior values will always be
// overwritten by the value in the next loop
// No matter how many pairs we feed to the function, the return value will always be
// {key: whatever value is in the last pair}

// 2.) The other reason is that, the function does not do the inverting it is intended to do.
// It just reassigns key to key, and value to value again
// So although we are to fix the key assignment with [] instead of .
// The function will still not work as intended, as it will not invert the pairs
// Thus, we need to assign value as key, and key as value
// This way, it will return the inverted pairs

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
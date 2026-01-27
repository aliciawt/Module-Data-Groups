function tally(array) {
    const talliedItems = {};

    if (!Array.isArray(array)) {
        throw new Error("Invalid input");
    }

    if (array.length === 0) {
        return talliedItems;
    }

    for (let item of array) {
        if (item in talliedItems) {
            talliedItems[item] += 1;
        } else {
            talliedItems[item] = 1;
        }
    } return talliedItems;
}


// example input ["a", "a", "i", "u", "u", "a", a"];
// expected output: {"a": 4, "i": 1, "u": 2};

module.exports = tally;

// LOOP 1
// "a"
// "a" in talliedItems? no
// talliedItems["a"] = 1
// talliedItems = {"a": 1}

// LOOP 2
// "a"
// "a" in talliedItems? yes
// talliedItems["a"] = 2
// talliedItems = {"a": 2}
// etc.
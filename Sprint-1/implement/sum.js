function sum(elements) {
    if (elements.length === 0) {return 0};
    const numbersOnly = elements.filter(val => typeof val === 'number');
    if (numbersOnly.length === 0) return null;
    let summedNumbers = 0;
    for(const element of numbersOnly) {
        summedNumbers += element;
    };
    return summedNumbers;
}

module.exports = sum;

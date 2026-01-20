function deduplicate(arr) {
    const deduplicated = arr.filter((item, index) => arr.indexOf(item) === index);
    return deduplicated;
}

module.exports = deduplicate;
function findMatching(array, string) {
    return array.filter(array => array.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, letters) {
    return array.filter(array => array.slice(0, letters.length) === letters);
}

function matchName(array, name) {
    return array.filter(array => array.name.toLowerCase() === name.toLowerCase());
}
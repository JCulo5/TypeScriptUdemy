function getLength(val) {
    if (typeof val === 'string') {
        var numberOfWords = val.split(' ').length;
        return "".concat(numberOfWords, " words");
    }
    return val.length;
}
var numOfWords = getLength('Hello world! This is TypeScript.');
var numItems = getLength([1, 2, 3, 4, 5]);
console.log(numOfWords);
console.log(numItems);

module.exports = function toReadable (number) {
    var converter = require('number-to-words');
    word = converter.toWords(number);
    word = word.replace(/[-]/g, ' ');
    return word;
}

module.exports = function toReadable (number) {
    const numeric = ['','one','two','three','four', 'five' ,'six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const decades = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    let word = '';
    let temp = number%100;
    if (temp !== 0) {
        if (temp < 20) {
            word = numeric[temp] + ' ' + word;
        } else {
            word = decades[Math.floor(temp/10)] + ' ' + numeric[Math.floor(temp)%10] + ' ' + word;
        }
    }
    temp = number%1000;
    if (Math.floor(temp/100) !== 0) {
        word = numeric[Math.floor(temp/100)] + ' ' + 'hundred ' + word;
    }
    
    return number == 0? 'zero' : word.trim();
}

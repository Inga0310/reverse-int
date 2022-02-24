module.exports = function reverse (n) {
    if (n > 0) {
        return +(n + '').split('').reverse().join('');
    } else if (n < 0 ) {
        return (+ (- n + '').split('').reverse().join(''));
    }
}


module.exports = function reverse (n) {
    if (n < 0) {
    n =  n * -1;
    }
    let res = '';
    let x = n.toString();
    for (i = x.length - 1; i >= 0; i--) {
        res += x[i]; 
    }
    return Number(res);
}



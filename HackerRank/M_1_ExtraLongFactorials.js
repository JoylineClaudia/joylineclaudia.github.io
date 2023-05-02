'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    let array = new Array(200);
    array[0] = 1;
    let len = 1;
    for(let i=2; i<=n ; i++){
        const r = multiply(i, array, len);
        array = r.res;
        len=r.size;
    }
    let str ='';
    for(let i=len-1;i>=0;--i){
        str += array[i];
    }
    console.log(str)
}

function multiply(x, res, size){
    let carry = 0;
    for(let i=0;i<size; ++i){
        let prod = (res[i]*x) + carry;
        res[i] = prod % 10;
        carry = Math.floor(prod/10);
    }
    while (carry){
        res[size] = carry % 10;
        carry = Math.floor(carry/10);
        size ++;
    }
    return { res , size}
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}

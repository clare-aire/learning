let orders = {
    'Clare Lindley': [
        {name: 'a', price: '1', quantity: 1},
        {name: 'a', price: '1', quantity: 1},
        {name: 'a', price: '1', quantity: 1}
    ],
    'Anna Cousins': [
        {name: 'a', price: '1', quantity: 1},
        {name: 'a', price: '1', quantity: 1},
        {name: 'a', price: '1', quantity: 1}
    ]
};

// can't do import without babel so using require
let fs = require('fs')

let output = fs.readFileSync('data.txt', 'utf-8')
    // 1. turn it into an array (get rid of before and after whitespace)
    .trim()
    .split('\n')
    .map(line => line.split('\t'));

console.log(output); // boom we have output!
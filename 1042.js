var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arrStr = lines[0].split(" "); 
let arrInt = arrStr.map(function(e) {
    return parseInt(e);
})
arrInt.sort(function(a, b){
    return (a - b);
})
arrInt.forEach(function(e){
    console.log(e);
})


console.log();

arrStr.forEach(function(e){
    console.log(e);
})

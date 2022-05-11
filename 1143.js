var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);

//if(n > 1 && n < 1000){

for(let i = 1; i <= n; i++){

    console.log(i +" "  + i * i +" " + i * i * i ); 
    
    }

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let i =  0;
let acount = 0;
let gcount = 0;
let dcount = 0;

while (true){
    let n = parseInt(lines[i++]);
    
    if(n === 4){
        break;
    }
    
    if(n === 1){
        acount++;
    }
    
    else if(n === 2){
        gcount++;
    }
    
    else if(n === 3){
        dcount++;
    }
}

console.log(`MUITO OBRIGADO`);
console.log(`Alcool: ${acount}`);
console.log(`Gasolina: ${gcount}`);
console.log(`Diesel: ${dcount}`);

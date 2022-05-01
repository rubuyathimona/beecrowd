var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0])

let csum = 0, rsum = 0, ssum = 0;

for(let i = 1; i <= n; i++) {
    let [a, t] = lines[i].split(" ")
    
    if(t === 'C') {
        csum = csum + parseInt(a);
    }
    else if(t == 'R') {
        rsum = rsum + parseInt(a);
    }
    else if(t == 'S') {
        ssum = ssum + parseInt(a);
    }
}
let sum = csum + rsum + ssum; 
let cavg = (csum * 100 / sum).toFixed(2); 
let ravg = (rsum * 100 / sum).toFixed(2);
let savg = (ssum * 100 / sum).toFixed(2);


console.log(`Total: ${sum} cobaias`);
console.log(`Total de coelhos: ${csum}`);
console.log(`Total de ratos: ${rsum}`);
console.log(`Total de sapos: ${ssum}`);
console.log(`Percentual de coelhos: ${cavg} %`);
console.log(`Percentual de ratos: ${ravg} %`);
console.log(`Percentual de sapos: ${savg} %`);

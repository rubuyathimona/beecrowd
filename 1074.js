var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++){
    let x = parseInt(lines[i]);
    
    if(x > 0 && x % 2 ===0){
        console.log(`EVEN POSITIVE`);
    }
    else if(x > 0 && x % 2 === 1){
        console.log(`ODD POSITIVE`);
    }
    else if(x < 0 && x % 2 === -0){
        console.log(`EVEN NEGATIVE`);
    }
    else if(x < 0 && x % 2 === -1){
        console.log(`ODD NEGATIVE`);
    }
    else{
        console.log(`NULL`);
    }
}

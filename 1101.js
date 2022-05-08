var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
while(true) {
    let [a, b] = lines[i++].split(" ").map((e) => parseInt(e));
    if (a <= 0 || b <= 0) {
        break;
    }
    
    let min = 0;
    let max = 0;
    if(a > b) {
        min = b;
        max = a
    }
    else{
        min = a;
        max = b;
    }
    
    let sum = 0;
    let seq = ""
    for(let k = min; k <= max; k++){
        sum = sum + k;
        seq = seq + k + " " ;
        
    }

    console.log(`${seq}Sum=${sum}`);
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]); 
// let first = parseInt(lines[i].split(" ")[0])
// let last = parseInt(lines[i].split(" ")[1])
for(let k = 1; k <= n; k++){
    let [first, last] = lines[k].split(" ")
                                .map((e) => parseInt(e));
    
    let sum = 0
    // let max = first > last ? first : last; 
    // let min = first < last ? first : last; 
    
    if (first > last) {
        max = first;
        min = last
    }
    else {
        min = first; 
        max = last;
    }
    for(let i = min + 1; i < max; i++) {
        if (i%2 == 1) {
            sum = sum + i
        }
    }
    console.log(sum)
}

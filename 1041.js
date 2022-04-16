var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines[0].split(" ");

let x = parseFloat(line[0]);
let y = parseFloat(line[1]);

if(x > 0 && y > 0){
    console.log("Q1");
}
else if(x < 0 && y > 0){
    console.log("Q2");
}
else if(x < 0 && y < 0){
    console.log("Q3");
}
else if(x > 0 && y < 0){
    console.log("Q4");
}
else if(x === 0 && y === 0){
    console.log("Origem")
}
else if(x === 0){
    console.log("Eixo Y");
}
else if(y === 0){
    console.log("Eixo X");
}

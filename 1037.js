var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseFloat(lines[0]);

if(n >= 0 && n <= 25){
    console.log("Intervalo [0,25]");
}
else if(n > 25 && n <= 50){
    console.log("Intervalo (25,50]");
}
else if(n > 50 && n<=75){
    console.log("Intervalo (50,75]");
}
else if(n > 75 && n <= 100){
    console.log("Intervalo (75,100]");
}
else if(n < 0 || n > 100){
    console.log("Fora de intervalo");
}

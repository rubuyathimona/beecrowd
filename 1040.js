var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines[0].split(" ");

let n1 = parseFloat(line[0]);
let n2 = parseFloat(line[1]);
let n3 = parseFloat(line[2]);
let n4 = parseFloat(line[3]);


let average =((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / (2 + 3 + 4 +1);

console.log("Media: " + average.toFixed(1));

if(average >= 7.0){
    console.log("Aluno aprovado.");
}
else if(average < 5.0){
    console.log("Aluno reprovado.");
}
else if(average >= 5.0 && average <= 6.9){
    console.log("Aluno em exame.");
    let n5 = parseFloat(lines[1]);
    
    console.log("Nota do exame: " + n5.toFixed(1));
    
    average = (average + n5) / 2;
    if(average >= 5.0){
    console.log("Aluno aprovado.");
    }
    else if(average <= 4.9){
        console.log("Aluno reprovado.");
    }
    
    console.log("Media final: " + average.toFixed(1));
    
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseFloat(lines[0]);
let salary = 0, increment = 0;
if(x >= 0 && x <= 400){
    salary = x + ( x * 15/100);
    increment = x * 15/100;
    console.log("Novo salario: " + salary.toFixed(2));
    console.log("Reajuste ganho: " + increment.toFixed(2));
    console.log("Em percentual: 15 %");
}

else if(x >= 400.01 && x <= 800.00){ 
    salary = x + ( x * 12/100);
    increment = x * 12/100;
    console.log("Novo salario: " + salary.toFixed(2));
    console.log("Reajuste ganho: " + increment.toFixed(2));
    console.log("Em percentual: 12 %");

}

else if(x >= 800.01 && x <= 1200.00){ 
    salary = x + ( x * 10/100);
    increment = x * 10/100;
    console.log("Novo salario: " + salary.toFixed(2));
    console.log("Reajuste ganho: " + increment.toFixed(2));
    console.log("Em percentual: 10 %");

}
else if(x >= 1200.01 && x <= 2000.00){ 
    salary = x + ( x * 7/100);
    increment = x * 7/100;
    console.log("Novo salario: " + salary.toFixed(2));
    console.log("Reajuste ganho: " + increment.toFixed(2));
    console.log("Em percentual: 7 %");

}

else if(x > 2000){ 
    salary = x + ( x * 4/100);
    increment = x * 4/100;
    console.log("Novo salario: " + salary.toFixed(2));
    console.log("Reajuste ganho: " + increment.toFixed(2));
    console.log("Em percentual: 4 %");

}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
while(true) {
 let number = parseInt(lines[i++]);
 if (number !== 2002){
     console.log("Senha Invalida");
 }
 
 else {
     console.log("Acesso Permitido");
     break;
 }
}

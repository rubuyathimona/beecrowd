var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let arr = lines.map((e) => parseInt(e));
let even = 0;
let odd = 0;
let positive = 0;
let negative = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
  if (arr[i] > 0) {
    positive++;
  }
  if (arr[i] < 0) {
    negative++;
  }
}
console.log(`${even} valor(es) par(es)`);
console.log(`${odd} valor(es) impar(es)`);
console.log(`${positive} valor(es) positivo(s)`);
console.log(`${negative} valor(es) negativo(s)`);

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var line = lines[0].split(" ");
var a = parseFloat(line[0]);
var b = parseFloat(line[1]);
var c = parseFloat(line[2]);

var triangle = 0.5 * a * c;
var circle = 3.14159 * c * c;
var trapezium = 0.5 * (a +b) * c;
var square = b * b;
var rectangle = a * b;

console.log("TRIANGULO: " + triangle.toFixed(3));
console.log("CIRCULO: " + circle.toFixed(3));
console.log("TRAPEZIO: " + trapezium.toFixed(3));
console.log("QUADRADO: " + square.toFixed(3));
console.log("RETANGULO: " + rectangle.toFixed(3));

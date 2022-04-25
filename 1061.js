var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let d1 = parseInt(lines[0].split(" ")[1]);
let [h1, m1, s1] = lines[1].split(":").map(e => parseInt(e));
let d2 = parseInt(lines[2].split(" ")[1]);
let [h2, m2, s2] = lines[3].split(":").map(e => parseInt(e));

let s = 0;
let m = 0;
let h = 0;
let d = 0;

if(s2 < s1){
    s = s2 + 60 - s1;
    m2 = m2 - 1;
}
else{
    s = s2 - s1;
}
if(m2 < m1){
    m = m2 + 60 -m1;
    h2 = h2 - 1;
}
else{
    m = m2 - m1;
}
if(h2 < h1){
    h = h2 + 24 - h1
    d2 = d2 - 1;
}
else{
    h = h2 - h1;
}
d = d2 - d1;

console.log(`${d} dia(s)`);
console.log(`${h} hora(s)`);
console.log(`${m} minuto(s)`);
console.log(`${s} segundo(s)`);

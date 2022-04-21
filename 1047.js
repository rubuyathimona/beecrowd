var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [h1, m1, h2, m2] = lines[0].split(" ").map(e => parseInt(e));

if (h1 == h2) {
    if (m1 > m2) {
        console.log(`O JOGO DUROU ${23} HORA(S) E ${m2 + 60 - m1} MINUTO(S)`);
    } else {
        if ( m1 == m1) {
            console.log(`O JOGO DUROU ${24} HORA(S) E ${0} MINUTO(S)`);
        }
        else {
            console.log(`O JOGO DUROU ${h2 - h1} HORA(S) E ${m2 - m1} MINUTO(S)`);
        }
    }
}
else if(h2 > h1){
    if(m2 >= m1){
        console.log(`O JOGO DUROU ${h2-h1} HORA(S) E ${m2-m1} MINUTO(S)`);
    } else {
        console.log(`O JOGO DUROU ${h2 - 1 - h1} HORA(S) E ${m2 + 60 -m1} MINUTO(S)`);
 
    }
} else {
    if(m2 >= m1){
        console.log(`O JOGO DUROU ${h2 + 24 -h1} HORA(S) E ${m2-m1} MINUTO(S)`);
    } else {
        console.log(`O JOGO DUROU ${h2 - 1 + 24 - h1} HORA(S) E ${m2 + 60 -m1} MINUTO(S)`);
    }
}

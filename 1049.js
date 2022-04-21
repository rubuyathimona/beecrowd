var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [line1, line2, line3] = lines
let animal = 
{
    vertebrado: {
        ave: {
            carnivoro: 'aguia',
            onivoro: 'pomba'
        },
        mamifero: {
            onivoro: 'homem',
            herbivoro: 'vaca'
            
        }
    },
    invertebrado: {
        inseto: {
            hematofago: 'pulga',
            herbivoro: 'lagarta'
        },
        anelideo: {
            hematofago: 'sanguessuga',
            onivoro: 'minhoca'
        }
    }
    
};
console.log(animal[line1][line2][line3])

var ism = prompt(`Ismingiz nima? `)
var age = +prompt(`${ism} Hozirgi yilni kiriting!`)
var age1 = +prompt(`${ism} Tug'ilgan yilingizni kiriting!`)
alert(`${ism}, yoshingiz ${age - age1} da`)


var raqam = +prompt("Nechta misol ishlamoqchisiz?")
let cool = 0;
for (let i = 0; i < raqam; i++) {
    let misol1 = misol();
    let correct;
    switch (misol1[2]) {
        case '+':
            correct = misol1[0] + misol1[1];
            break;
        case '-':
            correct = misol1[0] - misol1[1];
            break;
        case '*':
            correct = misol1[0] * misol1[1];
            break;
        case '/':
            correct = misol1[0] / misol1[1];
            break;

        default:
            break;
    }

    let ans = +prompt("Misolni yeching: " + (misol1[0]) +'  '+ misol1[2] +'  ' + (misol1[1]) + " = ?");
    if (ans == correct) {
        cool++;
    }
    console.log(ans == correct ? 'to`gri' : 'no`togri');
}
console.log(cool + ' / '+ raqam);
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function misol() {
    let pull = ''
    switch (rand(1, 4)) {
        case 1:
            pull = '+'
            break;
        case 2:
            pull = '-'
            break;
        case 3:
            pull = '*'
            break;
        case 4:
            pull = '/'
            break;

        default:
            break;
    }

    return [rand(1, 100), rand(1, 100), pull];
}


//By Omonjon Sobirov
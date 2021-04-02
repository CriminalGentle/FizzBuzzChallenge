//FIZZBUZZ CODING CHALLENGE

/*FIZZBUZZ é um desafio onde você conta de 1 a 100, e para cada número que é divisivel por 3, você diz FIZZ, e cada número que é divisivel por 5 dizemos BUZZ. 
E se um é divisivel por 3 e 5 você diz FIZZBUZZ.*/



function fbFor() {
//for loop
    for(let js_n = 1; js_n <= 100; js_n ++) {
        if(js_n % 3 == 0 && js_n % 5 == 0) {
            console.log('FIZZBUZZ');
        }
        else if (js_n % 3 == 0) {
            console.log('FIZZ');
        }
        else if (js_n % 5 == 0 ) {
            console.log('BUZZ');
        }
        else {
            console.log (js_n);
        }
    } 
};

function fbWhile() {
//while loop
var js_n = 1;

    while (js_n <= 100) {
        if(js_n % 3 == 0 && js_n % 5 == 0) {
            console.log('FIZZBUZZ');
        }
        else if (js_n % 3 == 0) {
            console.log('FIZZ');
        }
        else if (js_n % 5 == 0 ) {
            console.log('BUZZ');
        }
        else {
            console.log (js_n);
        }
        js_n += 1
    }
};

console.log(fbWhile());






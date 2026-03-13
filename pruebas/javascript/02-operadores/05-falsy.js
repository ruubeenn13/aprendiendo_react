// Short circuit

// Falsy values: false, 0, '', null, undefined, NaN

let nombre = '';
let username = nombre || 'Anónimo';
console.log(username); // Anónimo

nombre = 'Rubén';
username = nombre || 'Anónimo';
console.log(username); // Rubén

function fn1() {
    console.log('Soy función 1');
    return false;
}

function fun2 () {
    console.log('Soy función 2');
    return true;
}

let x = fn1() && fun2();
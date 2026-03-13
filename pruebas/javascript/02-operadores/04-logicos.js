console.log(true && true); // Devuelve true
console.log(false && true); // Devuelve false

let mayor = true;
let suscrito = false;

// AND &&
console.log('operador and', mayor && suscrito); // Devuelve false

// OR ||
console.log('operador or', mayor || suscrito); // Devuelve true

// NOT !
console.log('operador not', !mayor); // Devuelve false
console.log('operador not', !suscrito); // Devuelve true

let soloCatalogoInfantil = !mayor;
console.log('solo catálogo infantil', soloCatalogoInfantil); // Devuelve false
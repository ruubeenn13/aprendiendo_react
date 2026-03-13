// IF se usa cuando queremos ejecutar una porción de código solo si una condición es verdadera
// ELSE se usa cuando queremos ejecutar una porción de código solo si una condición es falsa

let edad = 0;

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad === 0) {
    console.log('Usuario recién nacido');
} else {
    console.log('Usuario menor de edad');
}
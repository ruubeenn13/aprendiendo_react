// DO WHILE al contrario de WHILE, evalúa la condición después de ejecutar el bloque de código

let i = 2;

// Imprime una vez el número par, luego evalúa la condición y si se cumple, vuelve a ejecutar el bloque de código
do {
    if (i % 2 === 0) {
        console.log('Número par:', i);
    }
    i++;
} while (i < 2);

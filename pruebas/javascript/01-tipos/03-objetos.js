let nombre = "Rubén";
let edad = 19;
let sexo = "Masculino";

let persona = {
  nombre: 'Rubén',
  edad: 19,
  sexo: 'Masculino'
};

// Imprimir el objeto completo
console.log(persona);

// Imprimir solo los valores
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.sexo);

// Imprimir solo el nombre usando notación de corchetes
console.log(persona['nombre']);

// Cambiar el valor de la edad usando notación de corchetes con variable llave
let llave = 'edad';
persona[llave] = 25;

delete persona.sexo;

// Imprimir el objeto completo con los cambios
console.log(persona);
const lusuarios = [
    {usuario : 'Andres', pass: 1234},
    {usuario : 'Andres', pass: 1234}
];

const usuarioIngresado = "Esmeralda";
const passwordIngresado = 12343;


for (let contador = 0; contador < lusuarios.length; contador++) {
    if (lusuarios[contador].usuario === usuarioIngresado){
        console.log(`Usuario correcto: es el usuario número ${contador}`);
    } else {
        console.log('Usuario incorrecto');
    }
}
/*
if (lusuarios[0].usuario === usuarioIngresado){
    console.log('Usuario correcto');
} else {
    console.log('Usuario incorrecto');
}

if (lusuarios[0].pass === passwordIngresado){
    console.log('Contraseña correcta');
} else {
    console.log('Vuelve a intentarlo');
}
*/
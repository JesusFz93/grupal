const usuaios = [
    {usuario : 'Lulu', pass: 1262},

];

const usuarioIngresado = "Lulu";
const passwordIngresado = 1262;


for (let contador = 0; contador < usuarios.length; contador++) {
    if (usuarios[contador].usuario === usuarioIngresado){
        console.log(`Usuario correcto: es el usuario número ${contador}`);
    } else {
        console.log('Usuario incorrecto');
    }
}
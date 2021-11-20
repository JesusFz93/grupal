
console.log("Si se ve el index");


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


const ingresar = () => {
    console.log("Hola mudnop");
}

const saludar = () => {
    console.log("Hola mundo");
}



const registrar = (e) => {

    console.log("Si funciona");

    // const nombre = document.getElementById('name');
    // const email = document.getElementById('email');
    // const password = document.getElementById('password');

    
    
    // if (nombre.value === '' || email.value === '' || password.value === '') {
    //     alert('Todos los campos son obligatorios');
    // } else {

    //     const usuario = {
    //         nombre: nombre.value,
    //         email: email.value,
    //         password: password.value,
    //     };
        
    //     console.log(usuario);

    //     nombre.value = '';
    //     email.value = '';
    //     password.value = '';

    //     nombre.focus();
    // }
}

function login () {
    const usuario = document.getElementById('usuario');
    const password = document.getElementById('password');

    
    
    if (usuario.value === '' || password.value === '') {
        alert('Todos los campos son obligatorios');
    } else {

        const usuarioObject = {
            usuario: usuario.value,
            password: password.value,
        };
        
        console.log(usuarioObject);

        usuario.value = '';
        password.value = '';

        usuario.focus();
    }
}
const formulario = document.getElementById('formulario');
const input = document.querySelectorAll ('#formulario input');

const expresiones= {
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, //Letras y espacios, pueden llevar acentos
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÁ-ÿ\s\.\,]{1,40}$/,
    mensaje: /^[a-zA-ZÁ-ÿ\s\.\,\:\;\"\-\_\!\?]{1,500}$/
}

const validarFormulario = (e) => {
   switch (e.target.name) {
    case "nombre":
        console.log('Funciona!');
    break;
   }
};

input.forEach((input) => {
    input.addEventListener('keyup', validarFormulario),
    input.addEventListener('blur', validarFormulario)
});

formulario.addEventListener('submit', (e) => {
    e.prevenDefault();
})
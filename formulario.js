// TARJETAS DE PROYECTOS

const gitsArray = ["proyects/memo.png"]

const selectors = {
  proyectosContainer: document.querySelector(".proyectos-container"),
  tarjetasGrid: document.querySelector(".tarjetas-grid")
}

const dimension = selectors.tarjetasGrid.getAttribute("data-dimension")

const generarGrid = () => {
  const imagen = ( gitsArray, dimension * dimension / 2 )
  const items = (imagen)
  const tarjeta = items.reduce((acc, element) => {
    return acc + `
    <div class="tarjeta">
      <div class="tarjeta-frente">
      </div>
      <div class="tarjeta-reverso">
      ${element}
      </div>
    </div>
    `
  }, "")
  selectors.tarjetasGrid.innerHTML = tarjeta
}

//   FORMULARIO

const btn = document.getElementById('button');

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_1lvy0tq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje enviado exitosamente!');
      document.getElementById('formulario').reset();
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});


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
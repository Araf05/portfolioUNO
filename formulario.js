
//  SCROLL UP

document.getElementById('button-up').addEventListener('click', scrollUp)

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp)
    window.scrollTo (0, currentScroll - (currentScroll / 20));
  }
}

/// EL BUTTON-UP APARECE Y DESAPARECE CUANDO HACEMOS SCROLL

buttonUp = document.getElementById('button-up');

window.onscroll = function(){
  var scroll = document.documentElement.scrollTop;
  
  if (scroll > 300) {
    buttonUp.style.transform = 'scale(1)';
  } else if (scroll <300) {
    buttonUp.style.transform = 'scale(0)';
  }
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



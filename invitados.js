

function mostrarInvitados() {
  // Mostrar invitado 1
  setTimeout(function() {
    document.querySelector('#invitado1 .foto').style.display = 'block'; // Muestra la foto
    setTimeout(function() {
      document.querySelector('#invitado1 .texto').style.display = 'block'; // Muestra el texto con efecto
      document.querySelector('#invitado1 .texto').style.width = '100%'; // Activa el efecto de escritura
    }, 1500); // Espera 1.5 segundos para el texto
  }, 0); // Muestra la foto inmediatamente

  // Mostrar invitado 2 después de 2 segundos
  setTimeout(function() {
    document.querySelector('#invitado2 .foto').style.display = 'block'; // Muestra la foto
    setTimeout(function() {
      document.querySelector('#invitado2 .texto').style.display = 'block'; // Muestra el texto con efecto
      document.querySelector('#invitado2 .texto').style.width = '100%'; // Activa el efecto de escritura
    }, 1500); // Espera 1.5 segundos para el texto
  }, 2000); // Espera 2 segundos para mostrar el invitado 2
}

// Llamar a la función para que se ejecute al cargar la página
window.onload = mostrarInvitados;
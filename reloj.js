function actualizarReloj() {
    var fecha = new Date();
    var horas = fecha.getHours().toString().padStart(2, '0');
    var minutos = fecha.getMinutes().toString().padStart(2, '0');
    var segundos = fecha.getSeconds().toString().padStart(2, '0');
    document.getElementById('reloj').textContent = horas + ':' + minutos + ':' + segundos;
}

setInterval(actualizarReloj, 1000); // Actualiza cada segundo
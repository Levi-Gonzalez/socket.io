//Compilacion de la config del cliente

// al instalar el script del lado del cliente (en el html) lo llamamos:
const socket = io.connect();

//2 escuchar mensaje del lado del servidor: 

socket.on('mi mensaje' , data =>{
    alert(data);
})
// on: método de socket, escucha.

// vamos a enviar desde el lado del cliente al servidor un mensaje:
socket.emit ('notificacion', 'Hola, servidor. Soy el cliente, entre a tu host! :D ')
//Compilacion de la  config del servidor.


const express = require ('express');
const {Server: HttpServer} = require ('http');
const {Server: IOserver} = require ('socket.io');

const app = express ();

//configuración de socket
const httpServer = new HttpServer(app)
const io = new IOserver (httpServer)

//middleware que sierve para trabajar con archivos estáticos.
app.use(express.static('public'));

//vamos a establecer conección con el cliente.
io.on('connection', socket =>{

    //1er comunicacion
    console.log("Nuevo cliente conectado");
    
    //apreton de manos de server a cliente. emite.
    socket.emit("mi mensaje","Hola, te estoy enviando un mensaje del lado del servidor. Gracias por ingresar a mi host." )
   
    //apreton de manos cliente a server. escucha.
    socket.on('notificacion', data =>{
        console.log(data);
    })


});

//crear puerto
const PORT = 8070

//Habilitar servidor
const server = httpServer.listen(PORT, () =>{
    console.log(`server corriendo en el puerto ${PORT} `);
});
//evento de error
server.on ('error', error => console.log(`error en servidor ${error}`));

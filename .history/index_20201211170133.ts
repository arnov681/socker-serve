import Server from "./clases/server";


const server = new Server();



server.start( () => {
    console.log(`El servidor esta corriendo en el puerto ${server.port}`);
});
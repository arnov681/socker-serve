import Server from "./clases/server";
import  router  from "./routes/router";

import bodyParser from 'bodyParser';

const server = new Server();

server.app.use('/', router);

server.start( () => {
    console.log(`El servidor esta corriendo en el puerto ${server.port}`);
});
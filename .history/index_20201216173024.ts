import Server from "./clases/server";
import  router  from "./routes/router";

import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server();

// bodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// Cors
server.app.use( cors({ origin: true, credentials: true }) );


server.app.use('/', router);

server.start( () => {
    console.log(`El servidor esta corriendo en el puerto ${server.port}`);
});
import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http'; 
import { mensaje } from '../sockets/socket';
import { mensaje } from '../.history/sockets/socket_20210119202028';
export default class Server {
  private static _intance: Server;


  public app: express.Application;
  public port: number;

  public io: socketIO.Server;
  
  private httpServer: http.Server;
  private constructor() {
      this.app = express();
      this.port = SERVER_PORT;

      this.httpServer = new http.Server( this.app ); 
      this.io = socketIO( this.httpServer );

      this.escucharSockets();

  }

  public static get instance() {
    return this._intance || ( this._intance = new this() );
  }

  private escucharSockets(){
    console.log('Escuchando conexiones -socket');

    this.io.on('connection', cliente =>{

      console.log('Nuevo cliente conectado');

      // Mensaje

     socket.mensaje( cliente, this.io );
      
    });
  }

  start( callback: Function ) {

    this.httpServer.listen( this.port );

  }
}
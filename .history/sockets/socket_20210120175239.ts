import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UsuariosLista } from '../classes/usuario-lista';

export const usuariosConectados = new UsuariosLista();


export const conectarCliente = ( cliente: Socket ) => {

    const usuario = new 
}


export const desconectar = ( cliente: Socket ) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

}


// Escuchar mensajes
export const mensaje = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('mensaje', (  payload: { de: string, cuerpo: string }  ) => {

        console.log('Mensaje recibido', payload );

        io.emit('mensaje-nuevo', payload );

    });

}

// Configurar usuario
export const configurarUsuario = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('configurar-usuario', (  payload: { nombre: string }, callback: Function  ) => {

        console.log('Configurando Usuario', payload.nombre );

        callback({
            ok: true,
            mensaje: ` Usuario ${ payload.nombre }, configurando `
        });

    });

}


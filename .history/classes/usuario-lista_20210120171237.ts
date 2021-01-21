import { Usuario } from './usuario';

export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor(){}
    
    // Agregar un usuario
    public agregar( usuario: Usuario ){

        this.lista.push( usuario );
        console.log( this.lista);
        return usuario;
    }

    public actualizarNombre( id: string, nombre: string ){}
}
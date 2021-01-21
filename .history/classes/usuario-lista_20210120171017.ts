import { Usuario } from './usuario';

export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor(){}

    public agregar( usuario: Usuario ){

        this.lista.push( usuario );
        console.log( this.lista);
    }
}
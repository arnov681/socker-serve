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

    public actualizarNombre( id: string, nombre: string ){

        for( let usuario of this.lista ){

            if ( usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }

        console.log(' === Actualizando usuario === ');
        console.log(this.lista);
    }

    // Obtener la lista de los usuarios

    
}
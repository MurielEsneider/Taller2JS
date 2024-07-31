import Libro from "./biblioteca.js";

class LibroSistema extends Libro {
    constructor(titulo, autor, formato) {
        super(titulo, autor); 
        this.formato = formato; 
    }

    mostrarEstado() {
        return `${super.mostrarEstado()}
                Formato: ${this.formato}`;
    }
}

export default LibroSistema;
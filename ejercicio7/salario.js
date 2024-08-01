class Empleado {
    #salario;
    constructor(nombre, apellido, cargo, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.#salario = salario;
    }
    calcularSueldoNeto() {
        const porcentajeDeduccion = 0.3; 
        const deducciones = this.#salario * porcentajeDeduccion;
        return this.#salario - deducciones;
    }
    mostrarDatos() {
        return "Nombre: " + this.nombre
                "Apellido: " + this.apellido
                "Cargo: " +this.cargo
                "Salario Neto: " + this.calcularSueldoNeto().toFixed(2)}"";
    
}

// Instancias
const empleado1 = new Empleado("Juan", "Imbachi", "Desarrollador", 2000);
console.log(empleado1.mostrarDatos());

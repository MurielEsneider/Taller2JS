class Contacto {
    constructor(nombre, apellido, telefono, correoElectronico) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.correoElectronico = correoElectronico;
    }
  }
  
  class Agenda {
    constructor() {
      this.contactos = []; 
    }
    agregarContacto(nombre, apellido, telefono, correoElectronico) {
      const nuevoContacto = new Contacto(nombre, apellido, telefono, correoElectronico);
      this.contactos.push(nuevoContacto);
    }
    editarContacto(nombre, nuevoNombre, nuevoApellido, nuevoTelefono, nuevoCorreoElectronico) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === nombre) {
          this.contactos[i].nombre = nuevoNombre;
          this.contactos[i].apellido = nuevoApellido;
          this.contactos[i].telefono = nuevoTelefono;
          this.contactos[i].correoElectronico = nuevoCorreoElectronico;  
          break;
        }
      }
    }
    eliminarContacto(nombre) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === nombre) {
          this.contactos.splice(i, 1);
          break;
        }
      }
    }
    mostrarContactos() {
      for (let i = 0; i < this.contactos.length; i++) {
        console.log(`Nombre: ${this.contactos[i].nombre},
          Apellido: ${this.contactos[i].apellido},
          Teléfono: ${this.contactos[i].telefono},
          Correo: ${this.contactos[i].correoElectronico}`);
      }
    }
  }
  

  let miAgenda = new Agenda();
  
  miAgenda.agregarContacto("Juan", "Imbachi", "123456789", "juan@gmail.com");
  miAgenda.agregarContacto("Ana", "Maria", "987654321", "ana@gmail.com");
  
  console.log("Contactos en la agenda:");
  miAgenda.mostrarContactos();
  
  miAgenda.editarContacto("Juan", "Juan", "Pérez", "111111111", "juan.perez@nuevoemail.com");
  
  console.log("Contactos después de editar:");
  miAgenda.mostrarContactos();
  
  miAgenda.eliminarContacto("Ana");
  
  console.log("Contactos después de eliminar:");
  miAgenda.mostrarContactos();
  
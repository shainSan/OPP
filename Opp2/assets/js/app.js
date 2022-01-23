class Animalito {
    constructor(nombre, edad, especie, revisado) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado;
        this.enfermo = false;
       
    }
    saludar() {
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario {
    constructor() {
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente) {
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        // this.cantidadPacientes++; 
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }
    modificarPacientesRevisados(){
        //Agrega un 1 
         this.pacientesRevisados++;
    }
    revisarPaciente(paciente) {
        if (paciente.revisado === false) {
            paciente.revisado = true;
            this.modificarPacientesRevisados();// llamdo a metodo a esta misma clase 
           // this.pacientesRevisados++;
            document.write("Este paciente ya fue revisado");
        } else {
            document.write("Este paciente ya fue revisado");
        }
    }

    mostrarLista() {
        for (let i = 0; i < this.listaPacientes.length; i++) {
            document.write(" " + this.listaPacientes[i].nombre);
        }
        document.write(`<br>cantidad de pacientes: ${this.cantidadPacientes}<br>
        Pacientes revisados ${this.pacientesRevisados}<br>`);
    }
}

const doctor1 = new Veterinario();
//Objetos creados de la clase animalito 
const animalito1 = new Animalito("Dominica", "3", "San Bernardo", false);//Objeto 1 
const animalito2 = new Animalito("Nutrisa", "10", "gato", true);//Objeto 2 

console.log(animalito1);
console.log(animalito2);

doctor1.agregarPaciente(animalito1);
doctor1.agregarPaciente(animalito2);

console.log(doctor1.listaPacientes);

doctor1.mostrarLista();
doctor1.revisarPaciente(animalito1);
doctor1.mostrarLista();

doctor1.revisarPaciente(animalito2);

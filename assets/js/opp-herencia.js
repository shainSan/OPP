class Pokemon{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;

    }
    // Metodos 
    atacar(){
        return console.log(`${this.nombre} esta atacando`)
    }
}
class Picachu extends Pokemon{
constructor(nombre,tipo,edad){
    super(nombre,tipo);
    this.edad = edad;
}
// metodos 
evolucionar(){
    return console.log(`${this.nombre} esta evolucionando`)
}
}
const Picachu1 = new Picachu('Juan', ' Electrico');
console.log(Picachu1);

Picachu1.atacar();
const Pokemon1 = new Pokemon('Charmander', ' Fuego');
Pokemon1.atacar();
//Pokemon1.evolucionar();
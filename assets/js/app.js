// Clase molde que nos perite crear objetos 
class Animal {
    nombre;
    especie;
    // constructor es una función
    constructor(nombre, especie){
//console.log('Este es un constructor');
// hace referencia al contexto que se esta utilizando
this.nombre = nombre;
this.especie = especie;
    }
    // getters y setters 
    //Solo tiene el proposito de leeer o modificar un atributo por cada uno de los atributos de nuestra clase 
get getNombre (){
return this.nombre;

}
set setNombre(nombre){
    this.nombre = nombre;
}
get getEspecie ()
{
    return this.especie;
}   
set setEspecie(especie){
    this.especie = especie;
}



//metodos ==fuction
    presentarse(){
        document.write(`
    hola soy ${this.especie} y me llamo ${this.nombre} <br>`
    );}
    cambiarNombre(nuevoNombre){
this.nombre = nuevoNombre;
let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
return document.write( mensaje);
    }
    // Metoso estatico 
    //Pertenese solo a las clases y no se hereda en objetos 
    
    static  saludar (){
        console.log('Hola soy un metodo estatico');
}
}

//Animal.presentarse();
//console.log(Animal.presntarse);

//heredan los atributos y metodos que se estan utilizando 
 const Animal1 = new Animal('Scooby', 'perro'); //creamos un objeto
 //Instanciar = Hacer una copia y crear un objeto
 console.log(Animal1);

 const  Animal2 = new Animal('Pecas', ' Gato');
 console.log(Animal2);

 const Animal3 = new Animal();
 console.log(Animal3);

 Animal1.presentarse();
 Animal2.presentarse();
 Animal3.presentarse();

 //Manda a llamar el cambio de nombre
 console.log( Animal1.nombre);
 Animal1.nombre = 'Shaggy'; //Anotacion de punto para cambiar el valor
 console.log( Animal1.nombre);
 console.log(Animal1);

document.write(Animal1.cambiarNombre('Oddie'));// Metodo para cambiar el valor

//Getters y setters Fuinciones que se hacen dentro de una clase
//get ayudan a obtener el valor de una variable 
//set ayudan a fijar cambiar el valor de un aributo
//Se utilizan como si fueran atributos

console.log (Animal1.getNombre);
Animal1.setNombre ='Manchas';
console.log(Animal1.getNombre);
console.log(Animal1);
//Animal1.saludar();

 /*Fuction constructor (){} */

class carro{
    constructor(marca, color, modelo, velocidad, numeroPuertas){

        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroPuertas = numeroPuertas;



    }

    acelerar(){
        this.velocidad += 1; 
        

    }

    frenar(){
    this.velocidad = 0;
    

    }

    reversa(){
        this.velocidad  -=1;
        

    }

    toString(){
        
            document.write(`El carro ${this.marca}, modelo ${this.modelo} del color ${this.color} que tiene
            ${this.numeroPuertas} puertas, va a una velocidad de ${this.velocidad} Km/h<br>`);
    }


}

const carro1 = new carro("Volvo", "Negro", "Carisimo", "120", "4");



carro1.toString();
carro1.frenar();

carro1.toString();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();


carro1.toString();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();
carro1.frenar();